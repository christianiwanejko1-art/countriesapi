const path = require("path");

module.exports = {
  // Dev mode = readable output + faster rebuilds
  mode: "development",

  // Entry point
  entry: "./src/index.js",

  // Output bundle
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  // Dev server (auto rebuild + refresh)
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    hot: true,
    open: true,
    port: 3000,
    watchFiles: ["src/**/*"],
  },

  module: {
    rules: [
      // JS (allows import/export)
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        type: "javascript/auto",
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },

      // CSS (allows: import "./styles.css")
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
{
  test: /\.svg$/i,
  type: "asset/resource",
}

    ],
  },
};
