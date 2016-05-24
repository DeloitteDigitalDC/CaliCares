'use strict';

describe('Controller:MyFamilyCtrl', function () {

  // load the controller's module
  beforeEach(angular.mock.module('rex'));
  beforeEach(angular.mock.module('templates'));

  var MyFamily,$state, scope, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    scope = $injector.get('$rootScope').$new();

    MyFamily = $injector.get('$controller')('MyFamily', {
      scope: scope
    });

    $httpBackend = $injector.get('$httpBackend');
    $state = $injector.get('$state');

  }));

  it('should go to another state', function () {
    MyFamily.search(); //add function here

    scope.$apply();

    $httpBackend.flush();

    expect($state.current.name).toBe('main.search.searchResults'); //add next state here
  });
});
