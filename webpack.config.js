const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        newfile: [
            './src/core/app.js',
            './src/core/core.js',
            './src/core/Popup.js',
            './src/core/render.js',
            './src/modules/animations/appear/options/fadeIn.js',
            './src/modules/animations/appear/options/horizontalMove.js',
            './src/modules/animations/appear/options/moveFromTop.js',
            './src/modules/animations/appear/options/zoomIn.js',
            './src/modules/animations/appear/appear.js',
            './src/modules/animations/appear/register.js',
            './src/modules/animations/disappear/options/fadeOut.js',
            './src/modules/animations/disappear/options/horizontalMove.js',
            './src/modules/animations/disappear/options/moveToTop.js',
            './src/modules/animations/disappear/options/zoomOut.js',
            './src/modules/animations/disappear/disappear.js',
            './src/modules/animations/disappear/register.js',
            './src/modules/animations/animation.js',
            './src/modules/behaviors/close/options/closeAfterXSeconds.js',
            './src/modules/behaviors/close/options/closeClickButton.js',
            './src/modules/behaviors/close/options/closeClickOutside.js',
            './src/modules/behaviors/close/close.js',
            './src/modules/behaviors/close/register.js',
            './src/modules/behaviors/open/options/afterViewXPage.js',
            './src/modules/behaviors/open/options/onClickItem.js',
            './src/modules/behaviors/open/options/scrollToXPercent.js',
            './src/modules/behaviors/open/options/visitWebAfterXSeconds.js',
            './src/modules/behaviors/open/open.js',
            './src/modules/behaviors/open/register.js',
            './src/modules/behaviors/behaviors.js',
            './src/modules/conditions/options/existClass.js',
            './src/modules/conditions/options/existCookie.js',
            './src/modules/conditions/condition.js',
            './src/modules/conditions/register.js',
            './src/modules/designs/components/overlay.js',
            './src/modules/designs/components/position.js',
            './src/modules/designs/design.js',
            './src/modules/designs/register.js',
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
};