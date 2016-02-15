
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
      ,{ test: /\.css$/, loaders: ["style", "css"] },
      ,{ test: /\.less$/, loaders: ["style","css", "less"] }      
    ]
  },
  hotMiddleware: {
    reload: true
  }
};
