var webpack = require('webpack');
var path = require('path');

module.exports = {
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  resolve: {
    root: path.join(__dirname, '..', 'client'),
    extensions: ['', '.js', '.jsx', '.json', '.less','.css']
  }
};
