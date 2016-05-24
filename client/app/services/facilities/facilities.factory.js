'use strict';

/**
 * @ngdoc factory
 *
 * @name facilities
 *
 * @description
 * Factory for rex
 */
(function () {

  angular
    .module('rex')
    .factory('facilities', facilities);

  function facilities($http) {
    return {
      getFacilities  : getFacilities,
      getByZipcode : getByZipcode
    };
    
    /**
     * gets facilities from api
     *
     * @memberof facilities
     *
     * @param {String} zipcode - the zipcode to search by
     */
    function getFacilities() {
      var promise = $http.get('/facilities');
      
      return promise;
    }
    
    /**
     * gets facilities from api of a certain zipcode
     *
     * @memberof facilities
     *
     * @param {String} zipcode - the zipcode to search by
     */
    function getByZipcode(zipcode) {
      var promise = $http.get('/facilities/' + zipcode);
      
      return promise;
    }
  }

})();

