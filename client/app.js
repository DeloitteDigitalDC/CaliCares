'use strict';

/**
 * @module rex
 *
 * @description
 * Main module of the application.
 */
angular
  .module('rex', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngMaterial',
    'ngTouch',
    'uiGmapgoogle-maps',
    'nemLogging'
  ])
  .config(function($httpProvider, $urlRouterProvider, $locationProvider, uiGmapGoogleMapApiProvider) {
    $httpProvider.defaults.withCredentials = true;

    $locationProvider.html5Mode(true);

    $urlRouterProvider.when('', '/'); // redirect to root if the state is ''
    $urlRouterProvider.when('/my-family', '/my-family/general-info'); // redirect to root if the state is ''

    $urlRouterProvider.otherwise('/'); // redirect to root if state is not found

    $httpProvider.interceptors.push(function($q, $location, $cookies) {
      return {
        response: function(response) {
          if (response.status === 401) {}
          return response;
        },
        responseError: function(rejection) {
          if (rejection.status === 401) {
            $cookies.remove('uid');
          }
          return $q.reject(rejection);
        }
      };
    });

    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyDOQhYDQuKnQ26uTbBTeXXMBEc_sxmTNO0',
      // v: '3.20', //defaults to latest 3.X anyhow
      libraries: 'weather,geometry,visualization'
    });
  });
