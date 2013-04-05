'use strict';
angular.module('ngWingleApp',['resource_service', "ui",'$strap.directives'])
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
                redirectTo: '/Wall'
            });
    });

angular.module('resource_service',['ngResource'])
    .factory('Card_resource', function($resource) {
        return $resource("http://localhost\\:4567/cards", {},
                         {cards: {method: 'GET'}});
    }).factory('Murmurs_resource', function($resource){
        return $resource("http://localhost\\:4567/murmurs", {},
			{murmurs: {method: 'GET'}});
    });
