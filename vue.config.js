const path = require("path");
console.log('vue config in');
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  transpileDependencies: ["resize-detector", "webpack-dev-server/client", "vue-plugin-load-script"],
  chainWebpack: config => {
    console.log('abc');
    config.entry.app = ["babel-polyfill", "src/main.js"];
  },
  publicPath: "./",
  configureWebpack: {
    devtool: "source-map"
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://entgene.com:5705/service/rest/"
      }
    }
  },
};
