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
    vm.map = {
      center: {
        latitude: 0,
        longitude: 0
      },
      zoom: 13
    };
    init();

    function createMap() {
      console.log('Lat:' + vm.lat);
      vm.map.center.latitude = vm.lat;
      vm.map.center.longitude = vm.lng;
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
      geocoder.geocode( { "address": "1919 N Lynn Street Rosslyn, VA" }, function(results, status) {
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
