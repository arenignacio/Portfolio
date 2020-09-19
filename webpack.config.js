const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		before: function (app, server) {
			server._watch('./dist/*.html');
		},
		contentBase: (__dirname, 'dist'),
		hot: true,
		port: 3000,
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};
