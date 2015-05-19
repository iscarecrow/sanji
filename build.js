({
  mainConfigFile: "static/js/main.js",
  // appDir: "./",
  baseUrl: "static/js",
  removeCombined: true,
  findNestedDependencies: true,
  dir: "dist",
  optimize: "none",
  optimizeCss: "standard",
  modules: [{
    name: "infrastructure"
  }, {
    name: "main-a",
    include: ["page/a.js"],
    exclude: [
      "infrastructure"
    ]
  }, {
    name: "main-b",
    include: ["page/b.js"],
    exclude: [
      "infrastructure"
    ]
  }],
  paths: {
    machina: "empty:"
  },
  generateSourceMaps: false
})