function NewCardCtrl($scope, Cards) {
    $scope.create = function(card) {
        c = new Cards(card);
        c.$create(c, function(){}, function error(response){
            return $scope.errors = response.data.errors;
        });
        $scope.cards.push(card);
        return $scope.card = {};
    };
};

function EditCardCtrl($scope, $location, $routeParams, Cards, Card) {
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

function CardsCtrl($scope, Cards) {
    $scope.cards = Cards.index();
};