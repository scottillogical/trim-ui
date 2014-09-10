'use strict';

describeComponent('component/add_measurement', function () {

  var template = '<div class=\'add-measurement-form\'/>';

  beforeEach(function () {
    this.setupComponent(template);
  });

  it('should be defined', function () {
    expect(this.component).toBeDefined();
  });

  it('Adds a measurement', function() {
    var eventSpy = spyOnEvent(document, 'uiAddMeasurement');
    var measurement = '36.0';


    $('.waist-input').val(measurement);
    $('button').click();

    expect(eventSpy).toHaveBeenTriggeredOn(document);
    expect(eventSpy.mostRecentCall.data).toEqual({
      measurement: {
        type: 'waist',
        value: measurement
      }
    });
  });
});
