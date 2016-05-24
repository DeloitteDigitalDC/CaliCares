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

  function HomeCtrl($scope, facilities) {
    var vm = this;
    vm.userZip = '90008';
    vm.myLatitude = 38.897692;
    vm.myLongitude = (-77.070333);
    vm.map = {
      center: {
        latitude: 0,
        longitude: 0
      }
    };
    vm.markers = [
      {
        id: "1",
        markerCoords: {
            latitude: vm.lat,
            longitude: vm.lng
        }
      }
    ];
    init();

    function createMap() {
      console.log('Lat:' + vm.myLatitude);
      console.log('Lng:' + vm.myLongitude);
      vm.map.center.latitude = vm.myLatitude;
      vm.map.center.longitude = vm.myLongitude;
    }

    function getCoords(geocoder, address, addMarker){
      geocoder.geocode( { "address": address }, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
            var location = results[0].geometry.location,
            lat = location.lat(),
            lng = location.lng();
            if (addMarker == true){
              console.log(vm.markers.length);
            }

          }
      });
    }

    function init(){
      var geocoder = new google.maps.Geocoder();
      facilities.getByZipcode(vm.userZip).then(function (res) {
        vm.facilitiesInZip = res.data;
        for (var facility in vm.facilitiesInZip){
          var address = vm.facilitiesInZip[facility].facility_address + ', ' + vm.facilitiesInZip[facility].facility_zip;
          getCoords(geocoder, address, true);
        }
      });
      createMap();
    };

    // facilities.getFacilities().then(function (res) {
    //   console.log(res.data);
    // });

  }

})();
