'use strict';

angular.module('ngWingleApp')
    .controller('WallCtrl', function ($scope, Cards) {
        $scope.cards = Cards.getCards();
        $scope.cardsCtrl = Cards;
        $scope.modal = {content: 'Hello Modal', saved: false};
    });

$(function() {
    $("html").removeClass("no-js").addClass("js");
    var $window = $(window);
    new FastClick(document.body);
    $(document).ready(function($) {
        // Disable certain links in docs
        $('section [href^=#]').click(function (e) {
            e.preventDefault();
        });
        // Make code pretty
        window.prettyPrint && window.prettyPrint();
    });
});