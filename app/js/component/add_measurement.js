define(function (require) {
  'use strict';

  var template = require('text!templates/add_measurement.html');
  var defineComponent = require('flight/lib/component');
  var handlebars = require('handlebars/handlebars');

  return defineComponent(addMeasurement);


  function addMeasurement() {
    this.attributes({
    });

    this.submit = function(e) {
      e.preventDefault();
      this.trigger('uiAddMeasurement');
    };

    this.after('initialize', function () {
      var compiledTemplate = handlebars.default.compile(template);
      $('.add-measurement-form').append(template);
      this.on('submit', this.submit);
    });
  }
});
