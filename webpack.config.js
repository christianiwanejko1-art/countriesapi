const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  experiments: {
    topLevelAwait: true,
  },

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
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults", modules: false }]],
          },
        },
      },

      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.svg$/i,
        type: "asset/resource",
      },
    {
  test: /\.m?js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      babelrc: false,
      configFile: false,
      sourceType: "unambiguous",
      presets: [
        ["@babel/preset-env", { targets: "defaults", modules: false }],
      ],
    },
  },
}

    ],
  },
};
