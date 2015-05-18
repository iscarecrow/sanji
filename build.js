// step one bundle into one file
({
  paths: {
    jquery: "lib/jquery/jquery-1.10.2",
    underscore: "lib/underscore/underscore"
  },

  shim: {
    underscore: {
      exports: "_"
    }
  },
  baseUrl: "static/js",
  name: "main",
  out: "dist/main.js",
  removeCombined: true
})