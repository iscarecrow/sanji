require( [ "infrastructure" ], function () {
  require( [ "page/b.js" ], function (b) {
    console.log('main-b.js');
  });
});