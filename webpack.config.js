const path = require("path");

module.exports = {
	entry: "./src/index.jsx",
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "bundle.js"
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
    module: {
    	rules: [
		{
			test: /\.jsx?$/,
			use:{
			loader: "eslint-loader"
			},
			include: path.join(__dirname, 'src'),
			exclude: path.join(__dirname, '')
		},
    	{
    		test: /\.jsx$/,
    		exclude: /node_modules/,
    		use: {
    			loader: "babel-loader"
    		},
    	},
    	{
    		test: /\.css$/,
    		use: ["style-loader", "css-loader"]
    	},
        {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
	]
    },
	devServer: {
		publicPath: '/dist/',
		port: 8022,
		historyApiFallback: true,
		hot: true
	},
};
