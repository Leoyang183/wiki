const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
console.log(path.resolve(__dirname, "src/index.html"), 3);
module.exports = {
  mode: "development",
  entry: {
    // app: __dirname + "/src/index.js"
    app: [
      "webpack/hot/only-dev-server",
      "webpack-dev-server/client?http://localhost:3000",
      // "react-hot-loader/patch",
      __dirname + "/src/index.js"
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", //["babel-loader", "react-hot-loader/webpack"],
          options: {
            cacheDirectory: true
            // plugins: ["react-hot-loader/babel"]
            // presets: ["env", "react"]
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    historyApiFallback: {
      rewrites: [
        {
          from: /^\/$/,
          to: path.resolve(__dirname, "dist/index.html")
        }
      ]
    },
    hot: true,
    port: 3000
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      filename: "index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
