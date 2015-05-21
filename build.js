({
  mainConfigFile: "static/js/main.js",
  // appDir: "./",
  baseUrl: "static/js",
  removeCombined: true,
  findNestedDependencies: false,
  dir: "dist",
  optimize: "none",
  optimizeCss: "standard",
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
  }],
  paths: {
    machina: "empty:"
  },
  generateSourceMaps: false
})