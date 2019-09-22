const base = require("./webpack.base.js");

module.exports = {
  ...base,
  entry: ["react-hot-loader/patch", ...base.entry],
  mode: "development",
  devtool: "source-map",
  devServer: {
    hot: true,
    port: 8080,
    proxy: {
      "!(/dist/**/**.*)": {
        target: "http://127.0.0.1:5000"
      }
    }
  }
};
