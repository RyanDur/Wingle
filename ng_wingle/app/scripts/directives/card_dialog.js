'use strict';

angular.module('ngWingleApp')
    .directive('cardDialog', function () {
        return {
	    restrict: 'E',
         //   transclude: true,
         /*   scope: {
                title: '@',             // the title uses the data-binding from the parent scope
                onOk: '&',              // create a delegate onOk function
                onCancel: '&',          // create a delegate onCancel function
                visible: '='            // set up visible to accept data-binding
            },*/
            templateUrl: 'views/partials/dialog.html'
//            replace: true,
  /*          link: function postLink(scope, element, attrs) {
                element.text('this is the dialog directive');
            }*/
        };
    });
