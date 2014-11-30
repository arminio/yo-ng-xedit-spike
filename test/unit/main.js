'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('mecoNgApp'));

  beforeEach(inject(function($rootScope) {
  	scope = $rootScope.$new();
  }));

  it('should define more than 5 awesome things', inject(function($controller) {
    expect(scope.users).toBeUndefined();

    $controller('MainCtrl', {
      $scope: scope
  	});

    expect(angular.isArray(scope.users)).toBeTruthy();
    expect(scope.users.length).toBe(2);
  }));


});

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });

  it("The 'toBeCloseTo' matcher is for precision math comparison", function() {
    var pi = 3.1415926,
      e = 2.78;

    expect(pi).not.toBeCloseTo(e, 2);
    expect(pi).toBeCloseTo(e, 0);
  });
});
