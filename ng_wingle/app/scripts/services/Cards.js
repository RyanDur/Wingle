'use strict';

function puts(){
    console.log(arguments[0]);
}
angular.module('ngWingleApp')
    .factory('Cards', function (Card_resource) {
        var resource = Card_resource.get();

        // Public API here
        return {
            getCards: function() {
                return resource;

            },
            addCard: function (card) {
                card = Card_resource.save(card, function(){}, function error(response){
                    return card.errors = response.data.errors;
                });
                resource.push(card);
                return card = {};
            }
        };
    });
