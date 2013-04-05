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
            {text: 'BootstrapCDN', href: 'http://www.bootstrapcdn.com/'}
        ];

    });
