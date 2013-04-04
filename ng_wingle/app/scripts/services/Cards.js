'use strict';

function puts(){
    console.log(arguments[0]);
}
angular.module('ngWingleApp')
    .factory('Cards', function ($resource) {
      var Card_resource = $resource("http://localhost\\:4567/card");
      var card = Card_resource.get();

        // Public API here
        return {
            getCards: function() {
               return card;
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
