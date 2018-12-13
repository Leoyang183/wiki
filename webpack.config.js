const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const srcRoot = './src';
console.log(path.resolve(__dirname, 'src/index.html'), 3);
module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(srcRoot, 'index.js')
    // app: [
    //   'webpack/hot/only-dev-server',
    //   'webpack-dev-server/client?http://localhost:3000',
    //   // "react-hot-loader/patch",
    //   __dirname + '/src/index.js'
    // ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ],
        include: path.resolve(srcRoot)
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: path.resolve(srcRoot)
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(srcRoot)
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: 'url-loader?limit=8192&name=images/[name].[hash].[ext]',
        include: path.resolve(srcRoot)
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    // historyApiFallback: {
    //   rewrites: [
    //     {
    //       from: /^\/$/,
    //       to: path.resolve(__dirname, 'dist/index.html')
    //     }
    //   ]
    // },
    hot: true,
    port: 3000
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: path.resolve(path.resolve(__dirname, 'dist/index.html')),
      template: path.resolve(srcRoot, 'index.html')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
