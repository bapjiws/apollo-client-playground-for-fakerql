const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
	publicPath: '/', // TODO: double-check this.
	filename: 'bundle.js'
  },
  plugins: [
	new webpack.HotModuleReplacementPlugin()
  ],
  module: {
	rules: [
	  {
		test: /\.(js|jsx)$/,
		exclude: /node_modules/,
		use: ['babel-loader']
	  }
	]
  },
  resolve: {
	extensions: ['*', '.js', '.jsx']
  },
  devServer: {
	contentBase: './dist',
	hot: true
  }
};