"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withModuleFederationForSSR = exports.withModuleFederation = void 0;
/**
 * @deprecated Use `@nx/module-federation/rspack` instead. This will be removed in Nx v22.
 */
var rspack_1 = require("@nx/module-federation/rspack");
Object.defineProperty(exports, "withModuleFederation", { enumerable: true, get: function () { return rspack_1.withModuleFederation; } });
Object.defineProperty(exports, "withModuleFederationForSSR", { enumerable: true, get: function () { return rspack_1.withModuleFederationForSSR; } });
