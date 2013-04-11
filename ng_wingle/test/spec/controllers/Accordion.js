'use strict';

describe('Controller: AccordionCtrl', function () {

  // load the controller's module
  beforeEach(module('ngWingleApp'));

  var AccordionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    AccordionCtrl = $controller('AccordionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
