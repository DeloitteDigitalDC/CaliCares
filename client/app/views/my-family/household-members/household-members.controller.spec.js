'use strict';

describe('Controller:HouseholdMembersCtrl', function () {

  // load the controller's module
  beforeEach(angular.mock.module('rex'));
  beforeEach(angular.mock.module('templates'));

  var HouseholdMembers;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    HouseholdMembers = $injector.get('$controller')('HouseholdMembers');
  }));

  it('condition of test', function () {

  });

});
