requirejs( [ "base.fb81478b" ], function () {
  requirejs( [ "page/a.js" ], function (a) {
  });
});
define("main-a.cca52347", function(){});

define('page/a.js',['jquery'], function($) {
  console.log('page-a.js');
  // $('div').anim({ rotate: '720deg', opacity: .5 }, 2, 'ease-out');
});
