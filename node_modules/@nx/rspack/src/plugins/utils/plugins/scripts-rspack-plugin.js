"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptsRspackPlugin = void 0;
const tslib_1 = require("tslib");
const loader_utils_1 = require("loader-utils");
const path = tslib_1.__importStar(require("path"));
const core_1 = require("@rspack/core");
function addDependencies(compilation, scripts) {
    for (const script of scripts) {
        compilation.fileDependencies.add(script);
    }
}
function hook(compiler, action) {
    compiler.hooks.thisCompilation.tap('scripts-rspack-plugin', (compilation) => {
        compilation.hooks.additionalAssets.tapAsync('scripts-rspack-plugin', (callback) => action(compilation, callback));
    });
}
class ScriptsRspackPlugin {
    constructor(options = {}) {
        this.options = options;
    }
    _insertOutput(compiler, compilation, { filename, source }, cached = false) {
        new core_1.EntryPlugin(compiler.context, this.options.name).apply(compiler);
        compilation.assets[filename] = source;
    }
    apply(compiler) {
        if (!this.options.scripts || this.options.scripts.length === 0) {
            return;
        }
        const scripts = this.options.scripts
            .filter((script) => !!script)
            .map((script) => path.resolve(this.options.basePath || '', script));
        hook(compiler, (compilation, callback) => {
            const sourceGetters = scripts.map((fullPath) => {
                return new Promise((resolve, reject) => {
                    compilation.inputFileSystem.readFile(fullPath, (err, data) => {
                        if (err) {
                            reject(err);
                            return;
                        }
                        const content = data.toString();
                        let source;
                        if (this.options.sourceMap) {
                            // TODO: Look for source map file (for '.min' scripts, etc.)
                            let adjustedPath = fullPath;
                            if (this.options.basePath) {
                                adjustedPath = path.relative(this.options.basePath, fullPath);
                            }
                            source = new core_1.sources.OriginalSource(content, adjustedPath);
                        }
                        else {
                            source = new core_1.sources.RawSource(content);
                        }
                        resolve(source);
                    });
                });
            });
            Promise.all(sourceGetters)
                .then((_sources) => {
                const concatSource = new core_1.sources.ConcatSource();
                _sources.forEach((source) => {
                    concatSource.add(source);
                    concatSource.add('\n;');
                });
                const combinedSource = new core_1.sources.CachedSource(concatSource);
                const filename = (0, loader_utils_1.interpolateName)({ resourcePath: 'scripts.js' }, this.options.filename, { content: combinedSource.source() });
                const output = { filename, source: combinedSource };
                this._insertOutput(compiler, compilation, output);
                this._cachedOutput = output;
                addDependencies(compilation, scripts);
                callback();
            })
                .catch((err) => callback(err));
        });
    }
}
exports.ScriptsRspackPlugin = ScriptsRspackPlugin;
