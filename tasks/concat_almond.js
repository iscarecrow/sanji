//Download jquery.js and place it in the build, do not use require-jquery.js 
//in the build, since each of the build layers just needs almond and not the 
//full require.js file.
//This file is run in nodejs to do the build: node build.js
 
//Load the requirejs optimizer
// var requirejs = require('../node_modules/requirejs/bin/r.js');
 
var rjs = require('requirejs');

//Set up basic config, include config that is
//common to all the requirejs.optimize() calls.
var baseConfig = {
    baseUrl: "static/js",
    // locale: "en-us",
//  optimize: "uglify",
    optimize: "none", // For debugging built versions
 
    wrap: true,
    paths: {
        //Remember, use downloaded jQuery 1.7 or greater,
        //not require-jquery.js
        backbone   : "lib/backbone/backbone",
        jquery     : "lib/jquery/jquery-1.10.2",
        underscore : "lib/underscore/underscore.min"
    },
    
    //All the built layers will use almond.
    name: 'almond'
 };
 
//Create an array of build configs, the baseConfig will
//be mixed in to each one of these below. Since each one needs to
//stand on their own, they all include jquery and the noConflict.js file
 
var configs = [
    {
        include: ['jquery'],
        out: '../main.js'
    },
]; 
 
 
// Function used to mix in baseConfig to a new config target
function mix(target) {
    for (var prop in baseConfig) {
        if (baseConfig.hasOwnProperty(prop)) {
            target[prop] = baseConfig[prop];
        }
    }
    return target;
}
 
//Create a runner that will run a separate build for each item
//in the configs array. Thanks to @jwhitley for this cleverness
var runner = configs.reduceRight(function(prev, currentConfig) {
  return function (buildReportText) { 
    console.log(buildReportText);
    rjs.optimize(mix(currentConfig), prev);
  };
}, function(buildReportText) {
    console.log(buildReportText);
});
 
//Run the builds
runner();