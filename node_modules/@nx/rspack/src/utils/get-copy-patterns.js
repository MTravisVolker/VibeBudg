"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCopyPatterns = getCopyPatterns;
function getCopyPatterns(assets) {
    return assets.map((asset) => {
        return {
            context: asset.input,
            // Now we remove starting slash to make rspack place it from the output root.
            to: asset.output,
            from: asset.glob,
            globOptions: {
                ignore: [
                    '.gitkeep',
                    '**/.DS_Store',
                    '**/Thumbs.db',
                    ...(asset.ignore ?? []),
                ],
                dot: true,
            },
        };
    });
}
