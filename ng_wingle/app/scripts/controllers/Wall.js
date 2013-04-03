'use strict';

angular.module('ngWingleApp')
    .controller('WallCtrl', function ($scope, Cards) {
	$scope.cards = Cards.getCards();
	$scope.cardsCtrl = Cards;
    });
