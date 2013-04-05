'use strict';

angular.module('ngWingleApp')
    .directive('cardDialog', function () {
        return {
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
	    link: function(scope, element, attrs) {
		element.bind();
	    }
        };
    });
