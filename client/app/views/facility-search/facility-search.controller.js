'use strict';

/**
 * @ngdoc controller
 *
 * @name FacilitySearch
 *
 * @description
 * Controller for rex
 */
(function() {

  angular
    .module('rex')
    .controller('FacilitySearch', FacilitySearch);

  function FacilitySearch(facilities, uiGmapGoogleMapApi) {
    var vm = this;
    vm.userZip = '90008'; //need to get from user
    vm.userLatitude = 0;
    vm.userLongitude = 0;
    vm.facilitiesInZip = [];
    vm.getIndex = getIndex;
    vm.getId = getId;
    vm.map = {
      center: {
        latitude: 0,
        longitude: 0
      },
      zoom: 13
    };
    vm.markers = [];
    // To do: Code below to show center of map
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

    uiGmapGoogleMapApi.then(function(maps) {
      init();
    });


    function getIndex(index) {
      //in progress
      console.log(index);
    }

    function getId(marker, eventName, model, eventArgs) {
      //in progress
      console.log(marker);
      console.log(model);
    }

    //sets correct map center based on user zipcode
    function configureMap() {
      vm.map.center.latitude = vm.userLatitude;
      vm.map.center.longitude = vm.userLongitude;
    }

    //gets coordinates for a given address and adds markers to map
    function getCoords(geocoder, address, addMarker) {
      geocoder.geocode({
        'address': address
      }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
          var location = results[0].geometry.location,
            lat = location.lat(),
            lng = location.lng();
          if (addMarker) {
            var marker = {
              id: String(vm.markers.length + 1),
              markerCoords: {
                latitude: lat,
                longitude: lng
              }
            }
            console.log(marker);
            vm.markers.push(marker);
          } else {
            vm.userLatitude = lat;
            vm.userLongitude = lng;
          }
        }
      });
    }

    function init() {
      var geocoder = new google.maps.Geocoder();
      getCoords(geocoder, vm.userZip, false);
      facilities.getByZipcode(vm.userZip).then(function(res) {
        vm.facilitiesInZip = res.data;
        for (var facility in vm.facilitiesInZip) {
          var address = vm.facilitiesInZip[facility].facility_address + ', ' + vm.facilitiesInZip[facility].facility_zip;
          getCoords(geocoder, address, true);
        }
        configureMap();
      });
    };

  }

})();
