'use strict';

describe('The main view', function () {

  beforeEach(function () {
    browser.get('http://localhost:3000/index.html');
  });

  it('list all the users', function () {
    element.all(by.repeater('user in users')).count().then(function(count) {
      expect(count).toBe(2);
    });
  });

});
