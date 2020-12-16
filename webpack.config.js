const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "bundle.js"
	},
    module: {
    	rules: [
    	{
    		test: /\.js$/,
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
      }
    	]
    }
};
