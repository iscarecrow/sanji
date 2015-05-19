define(['jquery'], function($) {
  console.log('a.js');
  console.log($);
  var a = {
    init: function () {
      console.log('abbbb.js');
    }
  }
  return a;
});