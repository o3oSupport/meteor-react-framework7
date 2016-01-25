var webpack = require('webpack');
var path = require('path');

module.exports = {
  externals: {
    'jquery': '$'
  },
  resolve: {
    root: path.join(__dirname, '..', 'client'),
    extensions: ['', '.js', '.jsx', '.json', '.less','.css']
  }
};
