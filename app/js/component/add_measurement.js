define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');
  return defineComponent(addMeasurement);


  function addMeasurement() {
    this.attributes({
    });

    this.after('initialize', function () {
    });
  }
});
