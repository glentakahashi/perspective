const path = require("path");

module.exports = {
  entry: ["./client/index.tsx"],
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/dist/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
