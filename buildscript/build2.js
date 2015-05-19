// step two bundle into two file
({
  mainConfigFile : "static/js/main.js",
  baseUrl: "static/js",
  removeCombined: true,
  findNestedDependencies: true,
  dir: "dist",
  modules: [
    {
      name: "main",
      exclude: [
        "backbone",
        "jquery",
        "swiper",
        "underscore"
      ]
    }
  ]
})