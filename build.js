({
  mainConfigFile: "static/js/main.js",
  // appDir: "./",
  baseUrl: "static/js",
  removeCombined: true,
  findNestedDependencies: false,
  dir: "dist",
  optimize: "none",
  optimizeCss: "standard",
  name: 'almond',
  modules: [{
    name: "base"
  }, {
    name: "main-a",
    include: ["page/a.js"],
    exclude: [
      "base"
    ]
  }, {
    name: "main-b",
    include: ["page/b.js"],
    exclude: [
      "base"
    ]
  }, {
    name: "h5-base"
  }, {
    name: "h5-main-a",
    include: ["page/h5-a.js"],
    exclude: [
      "h5-base"
    ]
  }],
  paths: {
    machina: "empty:"
  },
  generateSourceMaps: false
})