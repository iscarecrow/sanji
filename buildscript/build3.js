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
    name: "a",
    exclude: [
      "infrastructure"
    ]
  },{
    name: "main",
    exclude: [
      "infrastructure"
    ]
  }, {
    name: "infrastructure"
  }],
  paths: {
    machina: "empty:"
  },
  generateSourceMaps: true
})

