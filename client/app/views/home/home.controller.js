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
    vm.userLatitude = 0;
    vm.userLongitude = 0;
    vm.map = {
      center: {
        latitude: 0,
        longitude: 0
      },
      zoom: 13
    };
    vm.markers = [];
    // vm.centerCircle = {
    //   radius: 10,
    //   stroke: {
    //       color: '#08B21F',
    //       weight: 2,
    //       opacity: 1
    //   },
    //   fill: {
    //       color: '#08B21F',
    //       opacity: 0.5
    //   },
    // };
    init();

    function createMap() {
      vm.map.center.latitude = vm.userLatitude;
      vm.map.center.longitude = vm.userLongitude;
    }

    function getCoords(geocoder, address, addMarker){
      geocoder.geocode( { 'address': address }, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
            var location = results[0].geometry.location,
            lat = location.lat(),
            lng = location.lng();
            if (addMarker){
              var marker = {
                id: String(vm.markers.length+1),
                markerCoords: {
                    latitude: lat,
                    longitude: lng
                }
              }
              vm.markers.push(marker);
            }
            else{
              vm.userLatitude = lat;
              vm.userLongitude = lng;
            }
          }
      });
    }

    function init(){
      var geocoder = new google.maps.Geocoder();
      getCoords(geocoder, vm.userZip, false);
      facilities.getByZipcode(vm.userZip).then(function (res) {
        vm.facilitiesInZip = res.data;
        for (var facility in vm.facilitiesInZip){
          var address = vm.facilitiesInZip[facility].facility_address + ', ' + vm.facilitiesInZip[facility].facility_zip;
          getCoords(geocoder, address, true);
        }
        createMap();
      });
    };

    // facilities.getFacilities().then(function (res) {
    //   console.log(res.data);
    // });

  }

})();
