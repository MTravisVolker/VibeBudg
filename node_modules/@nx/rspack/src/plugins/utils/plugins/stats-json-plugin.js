"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsJsonPlugin = void 0;
const core_1 = require("@rspack/core");
class StatsJsonPlugin {
    apply(compiler) {
        compiler.hooks.emit.tap('StatsJsonPlugin', (compilation) => {
            const data = JSON.stringify(compilation.getStats().toJson('verbose'));
            compilation.assets[`stats.json`] = new core_1.sources.RawSource(data);
        });
    }
}
exports.StatsJsonPlugin = StatsJsonPlugin;
