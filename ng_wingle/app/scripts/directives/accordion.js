'use strict';

angular.module('ngWingleApp')
    .directive('accordion', function () {
        return {
            restrict:'E',
            transclude:true,
            scope:{},
            controller:'AccordionController',
            templateUrl:'views/partials/accordion.html'
        };
    });
