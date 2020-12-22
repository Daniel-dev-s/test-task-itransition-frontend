const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tx', '.tsx', '.ts'],
  },
  module: {
    	rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'eslint-loader',
        },
        include: path.join(__dirname, 'src'),
        exclude: path.join(__dirname, ''),
      },
    	{
    		test: /\.ts[x]$/,
    		exclude: /node_modules/,
    		use: {
    			loader: 'ts-loader',
    		},
    	},
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    publicPath: '/dist/',
    port: 8022,
    historyApiFallback: true,
    hot: true,
  },
};
