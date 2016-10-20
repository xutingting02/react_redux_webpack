var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

// 配置里面要用到的路径
var WEBPACK_PATH = (function () {
    // 项目根路径
    var root = path.resolve(__dirname);
    // src路径
    var src = path.resolve(root, 'src');
    // 打包产出路径
    var output = path.resolve(root, 'output');

    return {
        root,
        src,
        output
    };
}());


module.exports = {
    entry: {
	    dashboard: './src/js/pages/dashboard'
	},
    output: {
    	path: WEBPACK_PATH.output,
    	publicPath: '/',
        filename: 'build/[name].js'
    },
    module: {
	    loaders:[
	      	{
	        	test: /\.js[x]?$/,
	        	exclude: /node_modules/,
	        	loader: 'babel-loader',
	        },
	    ]
  	},
  	plugins: [
	    new HtmlWebpackPlugin({
	    	title: 'react_redux_webpack',
	    	filename: 'dashboard.html',
	    	chunks: ['dashboard'],
	    	template: 'tpl.html'
	    }),
	    new OpenBrowserPlugin({
	    	url: 'http://localhost:8080/dashboard.html'
	    })
  	]
};
