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
    vm.zipcodeSearch = vm.userZip;
    vm.userLatitude = 0;
    vm.userLongitude = 0;
    vm.facilitiesInZip = [];
    vm.getIndex = getIndex;
    vm.getId = getId;
    vm.searchZip = searchZip;
    vm.map = {
      center: {
        latitude: 0,
        longitude: 0
      },
      zoom: 13,
      markersEvents: {
          click: function(marker, eventName, model, eventArgs) {
            console.log(model);
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
        options: {}
      }
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

    vm.markerOptions = {
      visible: true
    };

    vm.windowOptions = {
      visible: false,
      content: 'test'
    };

    function searchZip() {
      vm.userZip = vm.zipcodeSearch;
      init();
    }

    // WILL REMOVE AFTER FIXING
    // vm.windowOnClick = function() {
    //   console.log('in window on click');
    //   console.log(vm.windowOptions.visible);
    //   vm.windowOptions.visible = !vm.windowOptions.visible;
    //   vm.windowShow = !vm.windowShow;
    // };
    //
    // vm.closeClick = function() {
    //    vm.windowOptions.visible = false;
    //    vm.windowShow = false;
    // };

    //CODE BELOW TO ADD STYLES TO MAP IF WE CHOOSE TO DO SO
    // var styleArray = [ //any style array defined in the google documentation you linked
    //   {
    //     featureType: "all",
    //     stylers: [
    //       { saturation: -80 }
    //     ]
    //   },{
    //     featureType: "road.arterial",
    //     elementType: "geometry",
    //     stylers: [
    //       { hue: "#00ffee" },
    //       { saturation: 50 }
    //     ]
    //   },{
    //     featureType: "poi.business",
    //     elementType: "labels",
    //     stylers: [
    //       { visibility: "off" }
    //     ]
    //   }
    // ];
    // vm.options = {
    //    styles: styleArray
    // };

    uiGmapGoogleMapApi.then(function(maps) {
      init();
    });

    //opens marker window if location is selected from list
    function getIndex(index) {
      var name = vm.facilitiesInZip[index].facility_name;
      var type = vm.facilitiesInZip[index].facility_type;
      for (var marker in vm.markers){
        if ((vm.markers[marker].name === name) && (vm.markers[marker].type === type)){
          vm.map.window.model = vm.markers[marker];
          vm.map.window.show = true;
          break;
        }
      }
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
    function getCoords(geocoder, address, addMarker, facilityName, facilityType){
      geocoder.geocode( { 'address': address }, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
            var location = results[0].geometry.location,
            lat = location.lat(),
            lng = location.lng();
            if (addMarker){
              var marker = {
                id: String(vm.markers.length),
                name: facilityName,
                type: facilityType,
                markerCoords: {
                    latitude: lat,
                    longitude: lng
                }
              }
            vm.markers.push(marker);
          } else {
            vm.userLatitude = lat;
            vm.userLongitude = lng;
          }
        }
        })
      };

    function init() {
      var geocoder = new google.maps.Geocoder();
      vm.markers = [];
      vm.facilitiesInZip = [];
      getCoords(geocoder, vm.userZip, false);
      facilities.getByZipcode(vm.userZip).then(function(res) {
        vm.facilitiesInZip = res.data;
        console.log(res.data);
        for (var facility in vm.facilitiesInZip) {
          var address = vm.facilitiesInZip[facility].facility_address + ', ' + vm.facilitiesInZip[facility].facility_zip;
          getCoords(geocoder, address, true, vm.facilitiesInZip[facility].facility_name, vm.facilitiesInZip[facility].facility_type);
        }
        configureMap();
      });
    };

  }

})();
