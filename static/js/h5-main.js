require.config({
  baseUrl: 'static/js',
  paths: {
    // almond:'../../../bower_components/zepto/zepto',
    zepto: '../../../bower_components/zepto/zepto',
    tap: "../../../bower_components/dist/tap/tap",
    hammer: "../../../bower_components/hammer.js/hammer.min",
    Handlebars: "../../../bower_components/handlebars/handlebars",
  },

  shim : {
    zepto: {
      exports: '$'
    },
    Handlebars: {
      exports: 'Handlebars'
    }
  }
});

define([
    "zepto"
], function($) {
  console.log($);
});
