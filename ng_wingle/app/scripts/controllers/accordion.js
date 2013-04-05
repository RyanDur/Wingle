angular.module('ngWingleApp').controller('AccordionController', function ($scope) {
  var groups = $scope.groups = [];
  this.select = function (group) {
    angular.forEach(groups, function (group) {
      group.selected = false;
    });
    group.selected = true;
  };
  this.addGroup = function (group) {
    groups.push(group);
    if(group.selected) {
      this.select(group);
    }
  };
  this.removeGroup = function (group) {
    groups.splice(groups.indexOf(group), 1);
  };
});
angular.module('ngWingleApp').directive('accordion', function () {
  return {
    restrict:'E',
    transclude:true,
    scope:{},
    controller:'AccordionController',
    templateUrl:'views/accordion.html'
  };
});
angular.module('ngWingleApp').directive('accordionGroup', function () {
  return {
    require:'^accordion',
    restrict:'E',
    transclude:true,
    scope:{
      title:'='
    },
    link:function (scope, element, attrs, accordionCtrl) {
      accordionCtrl.addGroup(scope);
      scope.select = function () {
        accordionCtrl.select(scope);
      };
      scope.$on('$destroy', function (event) {
        accordionCtrl.removeGroup(scope);
      });
    },
    templateUrl:'views/accordion-group.html',
    replace:true
  };
});