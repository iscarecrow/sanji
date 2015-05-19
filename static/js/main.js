/* step one */
require.config({

  paths: {
    backbone   : "lib/backbone/backbone",
    jquery     : "lib/jquery/jquery-1.10.2",
    swiper     : "lib/swiper/swiper",
    underscore : "lib/underscore/underscore.min"
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
    }
  }
});

// load foundational libs
// require( [ "infrastructure" ], function () {
//   require( [ "app" ], function ( app ) {
//     app.init();
//   });
// });

require( [ "infrastructure" ], function () {
  require( [ "a" ], function ( a ) {
    console.log('infrastructure');
    a.init();
  });
});