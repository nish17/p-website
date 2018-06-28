const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./public/js/index.js",
  // devtool: "source-map",
  // debug: true,
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    watchContentBase: true,
    watchOptions: {
      poll: true
    },
    historyApiFallback: true,
    hot: false
  }
};
