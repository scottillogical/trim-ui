define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');
  return defineComponent(addMeasurement);


  function addMeasurement() {
    this.attributes({
    });

    this.submit = function(e) {
      e.preventDefault();
      this.trigger('uiAddMeasurement');
    };

    this.after('initialize', function () {
      this.on('submit', this.submit);
    });
  }
});
