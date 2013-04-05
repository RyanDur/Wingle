'use strict';

angular.module('ngWingleApp',['resource_service', 'ui','$strap.directives', 'ui.bootstrap'])
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
            .when('/accordion', {
              templateUrl: 'views/accordion.html',
              controller: 'AccordionController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

angular.module('resource_service',['ngResource'])
    .factory('Card_resource', function($resource) {
        return $resource("http://localhost\\:4567/cards", {},
                         {cards: {method: 'GET'}});
    }).factory('Murmurs_resource', function($resource){
        return $resource("http://localhost\\:4567/murmurs", {},
                         {murmurs: {method: 'GET', isArray: true}});
    });
