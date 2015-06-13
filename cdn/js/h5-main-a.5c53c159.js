requirejs( [ "h5-base.92b85dae" ], function () {
  requirejs( [ "page/h5-a.js" ], function (a) {
  });
});
define("h5-main-a.5c53c159", function(){});

define('page/h5-a.js',['zepto'], function($) {
  console.log('page-h5-a.js');
  // $('div').anim({ rotate: '720deg', opacity: .5 }, 2, 'ease-out');
});
