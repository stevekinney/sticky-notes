const webpack = require('webpack');

const production = process.env.NODE_ENV === 'production';

const baseConfig = {
  resolve: {
    extensions: ['', '.webpack.js', '.js'],
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css?sourceMap', 'postcss?sourceMap'],
      },
      { test: /\.md$/, loader: 'html!markdown?sanitize=false' },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  plugins: [
  ].concat(
    production ? [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
      }),
    ] : []
  ),
  postcss() {
    return [require('autoprefixer'),
            require('postcss-custom-properties'),
            require('postcss-cssnext')];
  },
};

const configurations = function (...args) {
  return args.map((config) => Object.assign(config, baseConfig));
};

module.exports = configurations({
  entry: {
    main: './lib/index.js',
  },
  output: {
    filename: '[name].bundle.js',
  },
});
