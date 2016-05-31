'use strict';

describe('Controller:NewMsgModalCtrl', function () {

  // load the controller's module
  beforeEach(module('rex'));
  beforeEach(module('templates'));

  var NewMsgModal;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    NewMsgModal = $injector.get('$controller')('NewMsgModal');
  }));

  it('condition of test', function () {

  });

});
