/* step one */
require.config({

  paths: {
    jquery     : "lib/jquery/jquery-1.10.2",
    underscore : "lib/underscore/underscore"
  },

  shim : {
    underscore : {
      exports : "_"
    }
  }
});

// load foundational libs
// require( [ "infrastructure" ], function () {
  require( [ "app" ], function ( app ) {
    app.init();
  } );
// } );
