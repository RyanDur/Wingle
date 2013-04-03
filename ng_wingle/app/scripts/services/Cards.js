'use strict';

function puts(){
    console.log(arguments[0]);
}
angular.module('ngWingleApp')
    .factory('Cards', function ($resource) {
	var Card_resource = $resource("http://localhost\\:4567/card");
        Card_resource.get();

puts(Card_resource);
//   var i = 1;
//	var cards = Card_resource.query();

        // Public API here
        return {
            getCards: function() {
		return Card_resource.get();
               //return cards;
            },
            addCard: function (card) {
/*                card = Card_resource.save(card, function(){}, function error(response){
                    return errors = response.data.errors;
                });
                cards.push(card);
                return card = {};*/
            }
        };
    });
