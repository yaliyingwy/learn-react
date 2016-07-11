'use strict';

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const entries = {
	lifecycle: ['src/containers/lifecycle/lifecycle.js'],
  father: ['src/containers/father_child/father.js'],
}

const babelQuery = {
  presets: ['babel-preset-es2015', 'babel-preset-react', 'babel-preset-stage-0'].map(require.resolve)
};

const loaders = [
  {
	test: /\.js$/,
	exclude: /node_modules/,
	loader: 'babel',
	query: babelQuery,
  }, {
	test: /\.json$/,
	loader: 'json-loader',
  }, {
	test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
	loader: 'url?limit=10000&minetype=application/font-woff',
  }, {
	test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
	loader: 'url?limit=10000&minetype=application/font-woff',
  }, {
	test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
	loader: 'url?limit=10000&minetype=application/octet-stream',
  }, {
	test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
	loader: 'file',
  }, {
	test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
	loader: 'url?limit=10000&minetype=image/svg+xml',
  }, { 
	test: /\.(jpe?g|png|gif|svg)$/i,
	loader: 'url?limit=10000!img?progressive=true'
  }, {
    test: /\.less$/,
    loader:  ExtractTextPlugin.extract('css?sourceMap!autoprefixer-loader!less?sourceMap')
  }
];

const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.js'
  }),
  new ExtractTextPlugin("[name].css", {
      allChunks: true
  }),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env.DEBUG': process.env.DEBUG,
  }),
];

if (!process.env.DEBUG) {
	plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      output: {
        ascii_only: true
      },
      compress: {
        warnings: false
      }
    })
	);
}

Object.keys(entries).forEach((key) => {
	plugins.push(
		new HtmlWebpackPlugin({
      inject: true,
      minify: false,
      title: key,
      hash: true,
      filename: key + '.html',
      chunks: ['common', key],
      template: 'assets/tpl/index.html'
		})
	);
});

const resolve = {
	root: __dirname,
	extensions: ['', '.js', '.less', '.woff', '.svg', '.ttf', '.eot', '.json', '.png', '.jpg'],
	modulesDirectories: ['.', 'node_modules'],
};

const output = {
	path: path.join(__dirname, 'build'),
	publicPath: './',
	filename: '[name].js',
};

module.exports = {
	target: 'web',
	cache: true,
	entry: entries,
	resolve,
	output,
	module: { loaders },
	plugins,
}