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
  },
  {
    name: "main-a",
    exclude: [
      "infrastructure"
    ]
  },{
    name: "main-b",
    exclude: [
      "infrastructure"
    ]
  }],
  paths: {
    machina: "empty:"
  },
  generateSourceMaps: true
})