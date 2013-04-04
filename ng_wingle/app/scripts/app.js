'use strict';
angular.module('ngWingleApp',["ngResource", "ui",'$strap.directives'])
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
    }).factory('Card_resource', function($resource) {
	return $resource("http://localhost\\:4001/card");
    });
