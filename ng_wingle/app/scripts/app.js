'use strict';

angular.module('ngWingleApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/Wall', {
        templateUrl: 'views/Wall.html',
        controller: 'WallCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
