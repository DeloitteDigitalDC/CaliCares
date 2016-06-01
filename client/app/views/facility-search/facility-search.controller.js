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
    vm.userZip = '94610';
    vm.zipcodeSearch = vm.userZip;
    vm.userLatitude = 0;
    vm.userLongitude = 0;
    vm.facilitiesInZip = [];
    vm.getIndex = getIndex;
    vm.searchZip = searchZip;
    vm.markers = [];
    var googleMaps = {};
    vm.map = {
      center: {
        latitude: 0,
        longitude: 0
      },
      zoom: 13,
      markersEvents: {
        click: function(marker, eventName, model) {
          vm.map.window.model = model;
          vm.map.window.show = true;
        }
      },
      window: {
        marker: {},
        show: false,
        closeClick: function() {
          this.show = false;
        },
        options: {
          pixelOffset: {
            width: 0,
            height: -37
          }
        }
      }
    };

    function searchZip() {
      vm.userZip = vm.zipcodeSearch;
      init();
    }

    uiGmapGoogleMapApi.then(function(maps) {
      googleMaps = maps;
      init();
    });

    //opens marker window if location is selected from list
    function getIndex(index) {
      var name = vm.facilitiesInZip[index].facility_name.toLowerCase();
      var type = vm.facilitiesInZip[index].facility_type.toLowerCase();
      for (var marker in vm.markers) {
        if ((vm.markers[marker].facilityName === name) && (vm.markers[marker].facilityType === type)) {
          vm.map.window.model = vm.markers[marker];
          vm.map.window.show = true;
          break;
        }
      }
    }

    //sets correct map center based on user zipcode
    function configureMap() {
      vm.map.center.latitude = vm.userLatitude;
      vm.map.center.longitude = vm.userLongitude;
    }

    //gets coordinates for a given address and adds markers to map
    function getCoords(geocoder, address, addMarker, facility) {
      geocoder.geocode({
        'address': address
      }, function(results, status) {
        if (status === googleMaps.GeocoderStatus.OK && results.length > 0) {
        // if (status === google.maps.GeocoderStatus.OK && results.length > 0) {
          var location = results[0].geometry.location,
            lat = location.lat(),
            lng = location.lng();
          if (addMarker) {
            try {
              var marker = {
                id: String(vm.markers.length),
                facilityName: facility.facility_name.toLowerCase(),
                facilityType: facility.facility_type.toLowerCase(),
                facilityAddress: facility.facility_address.toLowerCase(),
                facilityAddress2: facility.facility_city.toLowerCase() + ', ' + facility.facility_state + ' ' + facility.facility_zip,
                facilityPhone: facility.facility_telephone_number,
                facilityCapacity: facility.facility_capacity,
                markerCoords: {
                  latitude: lat,
                  longitude: lng
                }
              };
              vm.markers.push(marker);
            } catch (err) {
              console.log(err);
            }

          } else {
            vm.userLatitude = lat;
            vm.userLongitude = lng;
          }
        }
      });
    }

    function init() {
      vm.showMap = true;
      var geocoder = new googleMaps.Geocoder();
      // var geocoder = new google.maps.Geocoder();
      vm.markers = [];
      vm.facilitiesInZip = [];
      getCoords(geocoder, vm.userZip, false);
      facilities.getByZipcode(vm.userZip).then(function(res) {
        vm.facilitiesInZip = res.data;

        _.forEach(vm.facilitiesInZip, function(facility) {
          var address = facility.facility_address + ', ' + facility.facility_zip;
          getCoords(geocoder, address, true, facility);
        });
        configureMap();
      });
    }

  }

})();
