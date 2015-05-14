({
    mainConfigFile : "./static/js/main.js",
    // appDir: "./",
    // optimize: "uglify",
    baseUrl: "./static/js",
    removeCombined: true,
    findNestedDependencies: true,
    dir: "dist",
    optimize: "none",
    optimizeCss: "standard",
    modules: [
      {name: "main"},
      // {
      //   name : "page1"
      //   exclude: [
      //     "main"
      //   ]
      // }
    ],
    paths: {
        machina: "empty:"
    },
    generateSourceMaps: true
})