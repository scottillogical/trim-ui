define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

   var AddMeasurement = require('component/add_measurement');

  /**
   * Module exports
   */

  return initialize;

  /**
   * Module function
   */

  function initialize() {
     AddMeasurement.attachTo(document);
  }

});
