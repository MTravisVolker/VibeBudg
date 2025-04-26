"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBuildableLibrary = isBuildableLibrary;
function isSourceFile(path) {
    return ['.ts', '.tsx', '.mts', '.cts'].some((ext) => path.endsWith(ext));
}
function isBuildableExportMap(packageExports) {
    if (!packageExports || Object.keys(packageExports).length === 0) {
        return false; // exports = {} → not buildable
    }
    const isCompiledExport = (value) => {
        if (typeof value === 'string') {
            return !isSourceFile(value);
        }
        if (typeof value === 'object' && value !== null) {
            return Object.entries(value).some(([key, subValue]) => {
                if (key === 'types' ||
                    key === 'development' ||
                    key === './package.json')
                    return false;
                return typeof subValue === 'string' && !isSourceFile(subValue);
            });
        }
        return false;
    };
    if (packageExports['.']) {
        return isCompiledExport(packageExports['.']);
    }
    return Object.entries(packageExports).some(([key, value]) => key !== '.' && isCompiledExport(value));
}
/**
 * Check if the library is buildable.
 * @param node from the project graph
 * @returns boolean
 */
function isBuildableLibrary(node) {
    if (!node.data.metadata?.js) {
        return false;
    }
    const { packageExports, packageMain } = node.data.metadata.js;
    // if we have exports only check this else fallback to packageMain
    if (packageExports) {
        return isBuildableExportMap(packageExports);
    }
    return (typeof packageMain === 'string' &&
        packageMain !== '' &&
        !isSourceFile(packageMain));
}
