'use strict';

describe('Controller:ChildrenCtrl', function () {

  // load the controller's module
  beforeEach(angular.mock.module('rex'));
  beforeEach(angular.mock.module('templates'));

  var Children;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    Children = $injector.get('$controller')('Children');
  }));

  it('condition of test', function () {

  });

});
