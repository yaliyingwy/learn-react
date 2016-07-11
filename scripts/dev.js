const config = require('../webpack.config.js');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

Object.keys(config.entry).forEach((key) => {
	config.entry[key].unshift(require.resolve('webpack-dev-server/client') + '?http://localhost:8080', require.resolve('webpack/hot/dev-server'));
});

config.debug = true;

config.devtool = 'eval-cheap-module-source-map';

config.plugins.push(
	new webpack.HotModuleReplacementPlugin()
);

const devServerConfig = {
	contentBase: config.output.path,
	hot: true,
	historyApiFallback: true,
	stats: {
		colors: true
	}
};

new WebpackDevServer(webpack(config), devServerConfig)
  .listen(8080, 'localhost', (err) => {
  	if (err) {
  		console.error(err);
  	}
  });