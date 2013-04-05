'use strict';

angular.module('ngWingleApp')
  .directive('nav', function () {
    return {
      templateUrl: 'views/partials/nav.html',
      restrict: 'E'
    };
  });
