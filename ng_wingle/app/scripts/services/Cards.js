'use strict';

angular.module('ngWingleApp')
    .factory('Cards', function () {
        // Service logic
        // ...
//        var Card_resource = $resource("http://localhost\\:3000/cards");
        var cards = [{title: "Hello", description: "World"}];

        // Public API here
        return {
	    getCards: function() {
		return cards;
	    },
            addCard: function (card) {
                cards.push(card);
                return card = {};
            }
        };
    });
