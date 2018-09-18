const path = require('path');

const config = {
    entry: './data.js',
    mode : 'development',
    output: {
        path: path.resolve(__dirname, ''),
        filename: 'index.js'
    }

}

module.exports = config;