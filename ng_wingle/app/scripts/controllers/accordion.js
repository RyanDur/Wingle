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
