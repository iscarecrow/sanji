/* global require */
// require.config({

//   paths: {
//     jquery     : "lib/jqeuery/jquery-1.10.2.min",
//     underscore : "lib/underscore/underscore-min"
//   },

//   shim : {
//     underscore : {
//       exports : "_"
//     }
//   }
// });

// // load foundational libs
// require( [ "infrastructure" ], function () {
//   require( [ "app" ], function ( app ) {
//     app.init();
//   } );
// } );

require.config({
  paths: {
    'jquery': 'lib/jquery/jquery-1.10.2',
    // 'underscore' : 'lib/underscore/underscore',
    'swiper': 'lib/swiper/swiper',
    // 'base': '../../dist/js/base',
    // 'common': '../../dist/js/common',
  },
  shim : {
    // underscore : {
    //   exports : "_"
    // }
  }
});

// require(['jquery','underscore'], function($ , _) {
//   return console.log($);
// });

// define(['jquery','swiper'], function($, Swiper) {
//     console.log($);
//     console.log(Swiper);
// });

// // load foundational libs
// require( [ "jquery" ], function ($) {
//   // require( [ "underscore" ], function () {
//   //   // return console.log(_);
//   // } );
// } );
