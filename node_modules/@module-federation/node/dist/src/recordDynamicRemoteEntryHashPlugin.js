"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const recordDynamicRemoteEntryHashPlugin = () => ({
    name: 'record-dynamic-remote-entry-hash-plugin',
    beforeInit(args) {
        if (!globalThis.mfHashMap) {
            globalThis.mfHashMap = {};
        }
        return args;
    },
    async onLoad(args) {
        const { moduleInstance } = args;
        if (!moduleInstance.remoteInfo) {
            return args;
        }
        const hashmap = globalThis.mfHashMap;
        if (!hashmap) {
            return args;
        }
        const { name, entry } = moduleInstance.remoteInfo;
        if (!hashmap[name]) {
            const hotReloadUtils = await Promise.resolve().then(() => __importStar(require('./utils/hot-reload')));
            const fetcher = hotReloadUtils.createFetcher(entry, hotReloadUtils.getFetchModule(), name, (hash) => {
                hashmap[name] = hash;
            });
            await fetcher;
        }
        return args;
    },
});
exports.default = recordDynamicRemoteEntryHashPlugin;
//# sourceMappingURL=recordDynamicRemoteEntryHashPlugin.js.map