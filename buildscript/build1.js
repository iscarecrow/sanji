
// step one bundle into one file
// ({
//   paths: {
//     backbone   : "lib/backbone/backbone",
//     jquery     : "lib/jquery/jquery-1.10.2",
//     swiper     : "lib/swiper/swiper",
//     underscore : "lib/underscore/underscore.min"
//   },

//   shim: {
//     backbone : {
//       deps : ["jquery", "underscore"],
//       exports : "Backbone"
//     },
//     underscore: {
//       exports: "_"
//     },
//     swiper : {
//       exports: "Swiper"
//     }
//   },
//   baseUrl: "static/js",
//   name: "main",
//   out: "dist/main.js",
//   removeCombined: true,
//   findNestedDependencies: true
// })