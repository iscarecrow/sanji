/* step one */
requirejs.config({
  baseUrl: 'static/js',
  paths: {
    backbone   : "lib/backbone/backbone",
    jquery     : "lib/jquery/jquery-1.10.2",
    swiper     : "lib/swiper/swiper",
    underscore : "lib/underscore/underscore.min",
    h5pack : "comm/h5pack",
    zepto: 'lib/zepto/zepto',
    'zepto.callbacks': 'lib/zepto/src/callbacks',
    'zepto.deferred': 'lib/zepto/src/deferred',
    'zepto.touch': 'lib/zepto/src/touch',
    'zepto.fx': 'lib/zepto/src/fx',
    'zepto.fx_methods': 'lib/zepto/src/fx_methods',
    'zepto.detect': 'lib/zepto/src/detect',
  },

  shim : {
    backbone : {
      deps : ["jquery", "underscore"],
      exports : "Backbone"
    },
    underscore : {
      exports : "_"
    },
    swiper : {
      exports: "Swiper"
    },
    'h5pack' : ["zepto"],
    'zepto.callbacks':["zepto"],
    'zepto.deferred': ["zepto"],
    'zepto.touch': ["zepto"],
    'zepto.fx': ["zepto"],
    'zepto.fx_methods': ["zepto"],
    'zepto.detect': ["zepto"]
  }
});
