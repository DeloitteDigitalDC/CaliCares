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

    vm.windowShow = false;

    vm.windowOnClick = function() {
      console.log('in window on click');
      console.log(vm.windowOptions.visible);
      vm.windowOptions.visible = !vm.windowOptions.visible;
      vm.windowShow = !vm.windowShow;
    };

    vm.closeClick = function() {
       vm.windowOptions.visible = false;
       vm.windowShow = false;
    };

    vm.title = "Window Title!";

    var styleArray = [ //any style array defined in the google documentation you linked
      {
        featureType: "all",
        stylers: [
          { saturation: -80 }
        ]
      },{
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          { hue: "#00ffee" },
          { saturation: 50 }
        ]
      },{
        featureType: "poi.business",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }
    ];
    vm.options = {
       styles: styleArray
    };

    uiGmapGoogleMapApi.then(function(maps) {
      debugger;
      init();
    });


    function getIndex(index) {
      //in progress
      console.log(vm.markers[index]);
      vm.map.window.model = vm.markers[index];
      vm.map.window.show = true;
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
    function getCoords(geocoder, address, addMarker, facilityName){
      geocoder.geocode( { 'address': address }, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
            var location = results[0].geometry.location,
            lat = location.lat(),
            lng = location.lng();
            if (addMarker){
              var marker = {
                id: String(vm.markers.length + 1),
                name: facilityName,
                markerCoords: {
                    latitude: lat,
                    longitude: lng
                },
                options: {
                  visible: true
                }
              }
            }
            vm.markers.push(marker);
          } else {
            vm.userLatitude = lat;
            vm.userLongitude = lng;
          }
        })

        console.log(vm.markers);
      };

    function init() {
      var geocoder = new google.maps.Geocoder();
      getCoords(geocoder, vm.userZip, false);
      facilities.getByZipcode(vm.userZip).then(function(res) {
        vm.facilitiesInZip = res.data;
        for (var facility in vm.facilitiesInZip) {
          var address = vm.facilitiesInZip[facility].facility_address + ', ' + vm.facilitiesInZip[facility].facility_zip;
          getCoords(geocoder, address, true, vm.facilitiesInZip[facility].facility_name);
        }
        configureMap();
      });
    };

  }

})();
