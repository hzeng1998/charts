const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    port: "8080",
    contentBase: "./dist",
    overlay: true,

    proxy: {
      "/upload": {
        target: "http://10.180.71.90:8000",
        changeOrigin: true,
        secure: false
      },
      "/ws": {
        target: "ws://10.180.71.90:8000",
        ws: true
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
  // module: {
  //   rules: [
  //     {
  //       // /(\.jsx|\.js)$/
  //       test: /(\.js)$/,
  //       use: {
  //         loader: "babel-loader",
  //       },
  //       exclude: /node_modules/
  //     }
  //   ]
  // }
};
