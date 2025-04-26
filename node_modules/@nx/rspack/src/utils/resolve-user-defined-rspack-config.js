"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveUserDefinedRspackConfig = resolveUserDefinedRspackConfig;
const config_utils_1 = require("@nx/devkit/src/utils/config-utils");
async function resolveUserDefinedRspackConfig(path, tsConfig, 
/** Skip require cache and return latest content */
reload = false) {
    return await (0, config_utils_1.loadConfigFile)(path);
}
