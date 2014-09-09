'use strict';

describeComponent('component/add_measurement', function () {

var template = "<form role='form'><div class='form-group'><input type='number' class='form-control' placeholder='Waist Measurement'></div><div class='form-group'><button class='btn btn-success'>Save</button></div></form>";

  // Initialize the component and attach it to the DOM
  beforeEach(function () {
    this.setupComponent(template);
  });

  it('should be defined', function () {
    expect(this.component).toBeDefined();
  });

  it('Adds a measurement', function() {
    var eventSpy = spyOnEvent(document, 'uiAddMeasurement');
    $('button').click();
    expect(eventSpy).toHaveBeenTriggeredOn(document);
  });
});
