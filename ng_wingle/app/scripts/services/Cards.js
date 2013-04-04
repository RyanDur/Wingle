'use strict';

function puts(){
    console.log(arguments[0]);
}
angular.module('ngWingleApp')
    .factory('Cards', function (Card_resource) {

        var cards = {card:{title:"Hello", description:"world"}};

        // Public API here
        return {
            getCards: function() {
                return cards;
            },
            addCard: function (card) {
                card = Card_resource.save(card, function(){}, function error(response){
                    return errors = response.data.errors;
                });
                cards.push(card);
                return card = {};
            }
        };
    });
