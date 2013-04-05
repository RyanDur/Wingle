'use strict';

describe('Directive: accordionGroup', function () {
  beforeEach(module('ngWingleApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<accordion-group></accordion-group>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the accordionGroup directive');
  }));
});
