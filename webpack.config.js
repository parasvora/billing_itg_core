const path = require('path');

const config = {
    entry: './jest.config.js',
    mode : "development",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "index.js"
    }

}

module.exports = config;