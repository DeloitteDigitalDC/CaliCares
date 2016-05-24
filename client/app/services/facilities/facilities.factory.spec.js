'use strict';

describe('factory:facilities', function () {

  // load the factory's module
  beforeEach(module('rex'));

  var facilities;

  // initialize a new instance of the factory before each test
  beforeEach(inject(function ($injector) {
    facilities = $injector.get('facilities');
  }));

  it('condition of test', function () {

  });

});
