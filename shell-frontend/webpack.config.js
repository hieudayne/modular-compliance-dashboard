const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html",
});
module.exports = {
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3001,
    historyApiFallback: {
      index: "/public/index.html",
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    htmlPlugin,
    new ModuleFederationPlugin({
      name: "Host",
      filename: "remoteEntry.js",
      remotes: {
        MicroFrontendTaskOverview:
          "MicroFrontendTaskOverview@http://localhost:3000/remoteEntry.js",
        MicroFrontendComplianceStatus:
          "MicroFrontendComplianceStatus@http://localhost:3002/remoteEntry.js",
        MicroFrontendRecentActivity:
          "MicroFrontendRecentActivity@http://localhost:3003/remoteEntry.js",
      },
      shared: {
        react: { singleton: true, eager: true },
        "react-dom": { singleton: true, eager: true },
        redux: { singleton: true, eager: true },
        "react-redux": { singleton: true, eager: true },
      },
    }),
  ],
};

// Checkout: "Checkout@http://localhost:3000/remoteEntry.js"
