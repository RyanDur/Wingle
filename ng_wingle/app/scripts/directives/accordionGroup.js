'use strict';

angular.module('ngWingleApp')
    .directive('accordionGroup', function () {
        return {
            require:'^accordion',
            restrict:'E',
            transclude:true,
            scope:{
                title:'='
            },
            link:function (scope, element, attrs, accordionCtrl) {
                accordionCtrl.addGroup(scope);
                scope.select = function () {
                    accordionCtrl.select(scope);
                };
                scope.$on('$destroy', function (event) {
                    accordionCtrl.removeGroup(scope);
                });
            },
            templateUrl:'views/partials/accordion-group.html',
            replace:true
        };
    });
