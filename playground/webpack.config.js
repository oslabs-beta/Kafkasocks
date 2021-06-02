const path = require('path');

module.exports = {
  //below production mode is not being used as of 2:30pm 5/19.
  mode: 'development',
  entry: './client/index.tsx',

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },

      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.scss'],
  },
  output: {
    //path: path.resolve(__dirname, 'build'),
    publicPath: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',

  devServer: {
    contentBase: './dist',
    port: 8000,
    proxy: {
      '*': 'http://[::1]:3000',
      changeOrigin: true,
    },
  },
};
