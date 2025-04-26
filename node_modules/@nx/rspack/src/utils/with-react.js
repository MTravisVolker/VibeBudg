"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withReact = withReact;
const with_web_1 = require("./with-web");
const apply_react_config_1 = require("../plugins/utils/apply-react-config");
function withReact(opts = {}) {
    return function makeConfig(config, { options, context }) {
        config = (0, with_web_1.withWeb)({ ...opts, cssModules: true })(config, {
            options,
            context,
        });
        (0, apply_react_config_1.applyReactConfig)(opts, config);
        return config;
    };
}
