'use strict';

angular.module('ngWingleApp')
    .directive('cardDialog', function () {
        return {
            restrict: 'E',
            //   transclude: true,
            scope: {
                // the title uses the data-binding from the parent scope
                title: '@',
                // create a delegate onOk function
                //    onOk: '&',
                // create a delegate onCancel function
                //    onCancel: '&',
                // set up visible to accept data-binding
                visible: '='
            },
            templateUrl: 'views/partials/dialog.html',
            //            replace: true,
            link: function (scope, element, attrs) {
		scope.$watch(attrs.cardDialog, function(card){
		    element.text('this is the card ' + card );
		});
            }
        };
    });
