'use strict';

describe('Controller:InboxCtrl', function () {

  // load the controller's module
  beforeEach(module('rex'));
  beforeEach(module('templates'));

  var Inbox;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    Inbox = $injector.get('$controller')('Inbox');
  }));

  it('condition of test', function () {

  });

});
