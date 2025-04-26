"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOutputHashFormat = getOutputHashFormat;
const devkit_1 = require("@nx/devkit");
const MAX_HASH_LENGTH = 16;
function getOutputHashFormat(option, length = MAX_HASH_LENGTH) {
    if (length > MAX_HASH_LENGTH) {
        devkit_1.logger.warn(`Hash format length cannot be longer than ${MAX_HASH_LENGTH}. Using default of ${MAX_HASH_LENGTH}.`);
        length = MAX_HASH_LENGTH;
    }
    const hashFormats = {
        none: { chunk: '', extract: '', file: '', script: '' },
        media: { chunk: '', extract: '', file: `.[hash:${length}]`, script: '' },
        bundles: {
            chunk: `.[chunkhash:${length}]`,
            extract: `.[contenthash:${length}]`,
            file: '',
            script: `.[contenthash:${length}]`,
        },
        all: {
            chunk: `.[chunkhash:${length}]`,
            extract: `.[contenthash:${length}]`,
            file: `.[contenthash:${length}]`,
            script: `.[contenthash:${length}]`,
        },
    };
    return hashFormats[option] || hashFormats['none'];
}
