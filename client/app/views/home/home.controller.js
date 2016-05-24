'use strict';

/**
 * @ngdoc controller
 *
 * @name HomeCtrl
 *
 * @description
 * The home landing page controller
 */
(function() {

  angular
    .module('rex')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl($scope) {
    var vm = this;
    vm.myLatitude = 38.897692;
    vm.myLongitude = (-77.070333);
    vm.map = {
      center: {
        latitude: 0,
        longitude: 0
      }
    };
    init();

    function createMap() {
      console.log('Lat:' + vm.myLatitude);
      console.log('Lng:' + vm.myLongitude);
      vm.map.center.latitude = vm.myLatitude;
      vm.map.center.longitude = vm.myLongitude;
      vm.markers = [
        {
          id: "1",
          markerCoords: {
              latitude: vm.lat,
              longitude: vm.lng
          }
        }
      ];
    }


    function init(){
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode( { "address": "white house washington DC" }, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
            var location = results[0].geometry.location,
            lat = location.lat(),
            lng = location.lng();
            vm.lat = lat;
            vm.lng = lng;
            createMap();
          }
      });
    };
  }

})();
