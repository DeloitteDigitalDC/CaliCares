'use strict';

describe('Controller:GeneralInfoCtrl', function () {

  // load the controller's module
  beforeEach(angular.mock.module('rex'));
  beforeEach(angular.mock.module('templates'));

  var GeneralInfo;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    GeneralInfo = $injector.get('$controller')('GeneralInfo');
  }));

  it('condition of test', function () {

  });

});
