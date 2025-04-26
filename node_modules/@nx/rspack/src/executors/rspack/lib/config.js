"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRspackConfigs = getRspackConfigs;
const config_1 = require("../../../utils/config");
const resolve_user_defined_rspack_config_1 = require("../../../utils/resolve-user-defined-rspack-config");
const with_nx_1 = require("../../../utils/with-nx");
const with_web_1 = require("../../../utils/with-web");
async function getRspackConfigs(options, context) {
    let maybeUserDefinedConfig = await (0, resolve_user_defined_rspack_config_1.resolveUserDefinedRspackConfig)(options.rspackConfig, options.tsConfig);
    let userDefinedConfig = 'default' in maybeUserDefinedConfig
        ? 'default' in maybeUserDefinedConfig.default
            ? maybeUserDefinedConfig.default.default
            : maybeUserDefinedConfig.default
        : maybeUserDefinedConfig;
    if (typeof userDefinedConfig.then === 'function') {
        userDefinedConfig = await userDefinedConfig;
    }
    const config = (options.target === 'web'
        ? (0, config_1.composePluginsSync)((0, with_nx_1.withNx)(options), (0, with_web_1.withWeb)(options))
        : (0, with_nx_1.withNx)(options))({}, { options, context });
    if (typeof userDefinedConfig === 'function' &&
        ((0, config_1.isNxRspackComposablePlugin)(userDefinedConfig) ||
            !options.standardRspackConfigFunction)) {
        // Old behavior, call the Nx-specific rspack config function that user exports
        return await userDefinedConfig(config, {
            options,
            context,
            configuration: context.configurationName,
        });
    }
    else if (userDefinedConfig) {
        if (typeof userDefinedConfig === 'function') {
            // assume it's an async standard rspack config function which operates similar to webpack
            // https://webpack.js.org/configuration/configuration-types/#exporting-a-promise
            return await userDefinedConfig(process.env.NODE_ENV, {});
        }
        // New behavior, we want the rspack config to export object
        return userDefinedConfig;
    }
    else {
        // Fallback case, if we cannot find a rspack config path
        return config;
    }
}
