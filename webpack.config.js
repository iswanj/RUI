var path = require('path');
    module.exports = {
        entry: './src/js/index.js',
        output: {
            path: __dirname,
            filename: './build/js/main.js'
        },
        module: {
            loaders: [
                { test: path.join(__dirname, 'src/js'),
                  loader: 'babel-loader' }
            ]
        }
    };