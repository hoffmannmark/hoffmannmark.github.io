const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const path = require("path");

const config = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, "public/assets/"),
    filename: "js/app_type.js",
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.sass$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "css", name: "[name].css",
            },
          },
          "sass-loader",
        ],
      },
    ],

  },
  devServer: {
    writeToDisk: true,
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3001,
      server: {baseDir: ['../uaship']},
      watchContentBase: true,
    }),
  ]
};

module.exports = config;
