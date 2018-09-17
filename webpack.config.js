const path = require('path');

const config = {
    entry: './index.js',
    mode : "development",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    }

}

module.exports = config;