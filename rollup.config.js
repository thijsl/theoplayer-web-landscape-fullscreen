export default {
    input: './src/index.js',
    output: [{
        file: './dist/theoplayer-web-landscape-fullscreen.js',
        format: 'umd',
        name: 'THEOplayerLandscapeFullscreen'
    }, {
        file: './dist/theoplayer-web-landscape-fullscreen.mjs',
        format: 'es'
    }]
};
