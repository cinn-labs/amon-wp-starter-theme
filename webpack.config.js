var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  devtool: debug ? 'inline-sourcemap' : null,
  entry: {
    main: './js/theme.js',
  },
  output: {
    path: __dirname + '/.dist/',
    filename: 'theme.min.js'
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
  module: {
    loaders: [
      {
        test: /\.js/,
        include: [
          path.resolve(__dirname, "js"),
          path.resolve(__dirname, "components"),
          path.resolve(__dirname, "node_modules/amon-wp")
        ],
        loader: 'babel?presets[]=es2015'
      },


      {
        test: /\.scss/,
        include: [
          path.resolve(__dirname, "sass"),
        ],
        loaders: ['style', 'css', 'sass']
      },

      {
        test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
        loader: 'url-loader?limit=100000'
      },

      // { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  }
};
