// 웹팩을 쓰는 이유는 스크립트가 너무 많아졌을 때 하나로 합치기 위함이라고 보면 된다.
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    entry: {
        app: path.join(__dirname, 'main.js')
    },
    // 모듈이 웹팩의 핵심이다.
    // 스크립트 파일들을 합칠 때 어떻게 합칠지를 정하는거라고 볼 수 있다.
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader'
            ]
        }]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist'
    }
}