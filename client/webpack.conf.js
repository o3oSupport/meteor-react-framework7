
module.exports = {
  entry: './lib/router',
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
            presets: [
                'react',
                'es2015'
            ]
        }
       }
    ]
  },
  hotMiddleware: {
    reload: true
  }
};
