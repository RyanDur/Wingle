angular.module("CardWall", ["ngResource"]).
    factory('Cards', function($resource) {
        return $resource("http://localhost\\:3001/cards", {}, {
            index: { method: 'GET', isArray: true},
            create: { method: 'POST' }
        });
    }).
    factory("Card", function($resource) {
        return $resource("http://localhost\\:3001/cards/:id", {}, {
            show: { method: 'GET'},
            update: { method: 'PUT'}
        });
    });

function CardsCtrl($scope, $routeParams, $location, Card, Cards) {
    $scope.cards = Cards.index(),

    $scope.create = function(card) {
        newCard = new Cards.$create($scope.card, function(){}, function error(response){
            return $scope.errors = response.data.errors;
        });
        $scope.cards.push(newCard);
        return $scope.card = {};
    },

    $scope.master = {};
    card_id = $routeParams.card_id;
    $scope.card = new Card.show({id: card_id}, function(resource) {
        $scope.master = angular.copy(card);
    }),
    $scope.update = function(card) {
        $scope.master = angular.copy(card);
        card.$update({id: card.id}, function(c) {
            $location.path('http://localhost\\:3001/cards/' + c.id);
        });
    },
    $scope.reset = function() {
        $scope.card = angular.copy($scope.master);
    };
};
