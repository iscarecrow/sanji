require( [ "infrastructure" ], function () {
  require( [ "page/a.js" ], function (a) {
    console.log('main-a.js');
  });
});