'use strict';

angular.module('ngWingleApp')
    .controller('MainCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.dropdown = [
            {text: 'Egghead', href: 'http://egghead.io/'},
            {text: 'BootstrapCDN', href: 'http://www.bootstrapcdn.com/'},
            {text: 'Yeoman', href: 'http://yeoman.io/'},
            {text: 'Mingle', href: 'https://mingle09.thoughtworks.com/projects/mingle/cards/grid?color_by=type&filters%5B%5D=%5BType%5D%5Bis%5D%5Bstory%5D&filters%5B%5D=%5BType%5D%5Bis%5D%5Bbug%5D&filters%5B%5D=%5BType%5D%5Bis%5D%5Btask%5D&filters%5B%5D=%5Bstatus%5D%5Bis+not%5D%5B%5D&filters%5B%5D=%5BIteration%5D%5Bis%5D%5B%28current+iteration%29%5D&group_by%5Blane%5D=status&lanes=ready+for+analysis%2Canalysis+in+progress%2Cready+for+development%2Cdevelopment+in+progress%2Cready+for+testing%2Ctesting+in+progress%2Cclosed&style=grid&tab=Story+Wall'},
            {text: 'Sinatra', href: 'http://www.sinatrarb.com/'},
            {text: 'Node', href: 'http://nodejs.org/'}

        ];

    });
