'use strict';

describe('Service: Murmurs', function () {

  // load the service's module
  beforeEach(module('ngWingleApp'));

  // instantiate service
  var Murmurs;
  beforeEach(inject(function (_Murmurs_) {
    Murmurs = _Murmurs_;
  }));

  it('should do something', function () {
    expect(!!Murmurs).toBe(true);
  });

});
