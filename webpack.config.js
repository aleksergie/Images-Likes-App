const path = require('path');

module.exports = {
    entry: './scripts/index.js',
    output: { 
      path: path.resolve(__dirname, 'dist/js'), 
      filename: 'bundle.js',
    },
    mode: 'development',
    devtool: 'source-map',
};