(function() {
    var app;
    app = angular.module("CardWall", ["ngResource"]);
    this.CardsCtrl = function($scope, $resource) {
        var Card;
        Card = $resource("http://localhost\\:3001/cards");
        $scope.cards = Card.query();
        return $scope.addCard = function() {
            var card;
            card = Card.save($scope.card, function(){}, function error(response){
                return $scope.errors = response.data.errors
            });
            $scope.cards.push(card);
            return $scope.card = {};
        };
    };
}).call(this);
