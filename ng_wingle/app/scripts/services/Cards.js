'use strict';

function puts(){
    console.log(arguments[0]);
}
angular.module('ngWingleApp')
    .factory('Cards', function (Card_resource) {

        var cards = Card_resource.query();

        // Public API here
        return {
            getCards: function() {
                return cards;
            },
            addCard: function (card) {
                card = Card_resource.save(card, function(){}, function error(response){
		    console.log('inside errors ' +response.data.errors);
                    return card.errors = response.data.errors;
                });
                cards['cards'].push(card);
                return card = {};
            }
        };
    });
