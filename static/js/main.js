/* step one */
require.config({

  paths: {
    backbone   : "lib/backbone/backbone",
    jquery     : "lib/jquery/jquery-1.10.2",
    swiper     : "lib/swiper/swiper",
    underscore : "lib/underscore/underscore.min",
    h5pack : "comm/h5pack",
    zepto: 'lib/zepto/zepto',
    'zepto.callbacks': 'lib/zepto/src/callbacks',
  },

  shim : {
    backbone : {
      deps : ["zepto", "underscore"],
      exports : "Backbone"
    },
    underscore : {
      exports : "_"
    },
    swiper : {
      exports: "Swiper"
    },
    h5pack : ["zepto"],
    'zepto.callbacks':["zepto"]
  }
});
