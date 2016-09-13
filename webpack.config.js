module.exports = {
  context: __dirname + '/src',
  entry: [
    './index.js'
  ],
  output: {
    path: __dirname + '/build',
    filename: 'enzyme.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.js.jsx'],
    root: __dirname + '/src'
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json' },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: [__dirname + '/src'],
        exclude: /node_modules/,
        query: {
          presets: ['stage-1', 'es2015', 'react']
        }
      }
    ]
  }
}
