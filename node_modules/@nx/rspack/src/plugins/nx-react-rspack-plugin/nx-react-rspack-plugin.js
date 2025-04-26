"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NxReactRspackPlugin = void 0;
const apply_react_config_1 = require("../utils/apply-react-config");
class NxReactRspackPlugin {
    constructor(options = {}) {
        this.options = options;
    }
    apply(compiler) {
        (0, apply_react_config_1.applyReactConfig)(this.options, compiler.options);
    }
}
exports.NxReactRspackPlugin = NxReactRspackPlugin;
