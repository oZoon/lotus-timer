let path = require('path');

let config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'build.js',
        publicPath: 'build/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.(mjs|js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    }
                }
            },
        ]
    },
};

module.exports = (env, options) => {
    let prd = options.mode === 'production';
    config.devtool = prd
        ? false // или 'source-map', но зачем это на production, оставляем false
        : 'eval-sourcemap';
    return config;
}
