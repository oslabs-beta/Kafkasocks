const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    //below production mode is not being used as of 2:30pm 5/19.  
  mode: 'development',
  entry: './client/index.tsx',
   
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ],
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  
  devServer: {
    contentBase: './build',
    port: 8000,
    proxy: {
      '/': 'http://localhost:3333'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './client/index.html')
    })
  ]
}