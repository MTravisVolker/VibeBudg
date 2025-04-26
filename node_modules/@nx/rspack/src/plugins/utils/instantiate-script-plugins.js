"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instantiateScriptPlugins = instantiateScriptPlugins;
const tslib_1 = require("tslib");
const path = tslib_1.__importStar(require("path"));
const hash_format_1 = require("./hash-format");
const scripts_rspack_plugin_1 = require("./plugins/scripts-rspack-plugin");
const normalize_entry_1 = require("./normalize-entry");
function instantiateScriptPlugins(options) {
    // process global scripts
    const globalScriptsByBundleName = (0, normalize_entry_1.normalizeExtraEntryPoints)(options.scripts || [], 'scripts').reduce((prev, curr) => {
        const bundleName = curr.bundleName;
        const resolvedPath = path.resolve(options.root, curr.input);
        const existingEntry = prev.find((el) => el.bundleName === bundleName);
        if (existingEntry) {
            existingEntry.paths.push(resolvedPath);
        }
        else {
            prev.push({
                inject: curr.inject,
                bundleName,
                paths: [resolvedPath],
            });
        }
        return prev;
    }, []);
    const hashFormat = (0, hash_format_1.getOutputHashFormat)(options.outputHashing);
    const plugins = [];
    // Add a new asset for each entry.
    globalScriptsByBundleName.forEach((script) => {
        const hash = script.inject ? hashFormat.script : '';
        const bundleName = script.bundleName;
        plugins.push(new scripts_rspack_plugin_1.ScriptsRspackPlugin({
            name: bundleName,
            sourceMap: !!options.sourceMap,
            filename: `${path.basename(bundleName)}${hash}.js`,
            scripts: script.paths,
            basePath: options.sourceRoot,
        }));
    });
    return plugins;
}
