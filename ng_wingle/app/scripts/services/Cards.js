'use strict';

function puts(){
    console.log(arguments[0]);
}
angular.module('ngWingleApp')
    .factory('Cards', function (Card_resource) {
        var resource = {};

        // Public API here
        return {
            getCards: function() {
                return Card_resource.query(function(data) {
                    resource = data;
                });

            },
            addCard: function (card) {
                card = Card_resource.save(card, function(){}, function error(response){
                    return card.errors = response.data.errors;
                });
                cards.push(card);
                return card = {};
            }
        };
    });
