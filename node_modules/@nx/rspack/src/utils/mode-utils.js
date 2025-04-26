"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMode = isMode;
function isMode(mode) {
    return mode === 'development' || mode === 'production' || mode === 'none';
}
