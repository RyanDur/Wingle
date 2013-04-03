'use strict';

angular.module('ngWingleApp')
    .controller('WallCtrl', function ($scope, Cards) {
	$scope.cards = Cards;
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
