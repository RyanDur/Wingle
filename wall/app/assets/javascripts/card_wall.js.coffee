# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/
app = angular.module("CardWall",["ngResource"])

@CardsCtrl = ($scope, $resource) ->
        Card = $resource("http://localhost\\:3001/cards")
        $scope.cards = Card.query()

        $scope.addCard = ->
                card = Card.save($scope.card)
                $scope.cards.push(card)
                $scope.card = {}
