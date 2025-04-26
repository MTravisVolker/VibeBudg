"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCompiler = createCompiler;
exports.isMultiCompiler = isMultiCompiler;
const core_1 = require("@rspack/core");
const config_1 = require("../executors/rspack/lib/config");
async function createCompiler(options, context) {
    const config = await (0, config_1.getRspackConfigs)(options, context);
    if (!options.standardRspackConfigFunction) {
        validateConfig(config);
    }
    return (0, core_1.rspack)(config);
}
function isMultiCompiler(compiler) {
    return 'compilers' in compiler;
}
function validateConfig(config) {
    [config].flat().forEach((config) => {
        if (!config.entry) {
            throw new Error('Entry is required. Please set the `main` option in the executor or the `entry` property in the rspack config.');
        }
        if (!config.output) {
            throw new Error('Output is required. Please set the `outputPath` option in the executor or the `output` property in the rspack config.');
        }
    });
}
