const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'src')],
        use: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        include: [path.resolve(__dirname, 'src')],
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['ts', '.tsx', '.js'],
  },
  devtool: 'eval-source-map',
  devServer: {
    static: './public',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: './index.html',
  //   }),
  // ],
};
