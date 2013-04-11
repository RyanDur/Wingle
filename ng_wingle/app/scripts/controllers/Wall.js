'use strict';

angular.module('ngWingleApp')
    .controller('WallCtrl', function ($scope, Cards, Murmurs) {
        $scope.resource = Cards.getCards();
        $scope.murmurs = Murmurs.getMurmurs();
        $scope.cardsCtrl = Cards;
	$scope.dropdown = [
            {text: 'Egghead', href: 'http://egghead.io/'},
            {text: 'BootstrapCDN', href: 'http://www.bootstrapcdn.com/'},
            {text: 'Beryllium Work', href: 'http://blog.berylliumwork.com/'},
            {text: 'API Reference', href: 'http://code.angularjs.org/0.9.16/docs-0.9.16/#!/api'},
            {text: 'Yeoman', href: 'http://yeoman.io/'},
            {text: 'Mingle', href: 'https://mingle09.thoughtworks.com/projects/mingle/cards/grid?color_by=type&filters%5B%5D=%5BType%5D%5Bis%5D%5Bstory%5D&filters%5B%5D=%5BType%5D%5Bis%5D%5Bbug%5D&filters%5B%5D=%5BType%5D%5Bis%5D%5Btask%5D&filters%5B%5D=%5Bstatus%5D%5Bis+not%5D%5B%5D&filters%5B%5D=%5BIteration%5D%5Bis%5D%5B%28current+iteration%29%5D&group_by%5Blane%5D=status&lanes=ready+for+analysis%2Canalysis+in+progress%2Cready+for+development%2Cdevelopment+in+progress%2Cready+for+testing%2Ctesting+in+progress%2Cclosed&style=grid&tab=Story+Wall/'},
            {text: 'Sinatra', href: 'http://www.sinatrarb.com/'},
            {text: 'Node', href: 'http://nodejs.org/'}
        ];

        $scope.modal = {content: 'Hello Modal', saved: false};
        $scope.popover ={
            content: "Hello Popover<br />This is a multiline message!",
            saved: false
        };
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
