const path = require('path');

const config = {
    entry: './jest.config.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "index.js"
    }

}

module.exports = config;