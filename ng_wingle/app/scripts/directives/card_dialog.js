'use strict';

angular.module('ngWingleApp')
  .directive('cardDialog', function () {
    return {
/*            transclude: true,
            scope: {
                title: '@',             // the title uses the data-binding from the parent scope
                onOk: '&',              // create a delegate onOk function
                onCancel: '&',          // create a delegate onCancel function
                visible: '='            // set up visible to accept data-binding
            },
            template: '<div ng-show="visible">'+
                        '<h3>{{title}}</h3>'+
                        '<div class="body" ng-transclude></div>'+
                        '<div class="footer">'+
                          '<button ng-click="onOk()">Save changes</button>'+
                          '<button ng-click="onCancel()">Close</button>'+
                        '</div>'+
                      '</div>',
            restrict: 'E',
            replace: true,
            link: function postLink(scope, element, attrs) {
                element.text('this is the dialog directive');
            }
        };*/
    };
  });
