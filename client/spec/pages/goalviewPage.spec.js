'use strict';

var goalviewPage = require('../../src/js/pages/goalviewPage.js'),
  Router = require('../../src/js/framework/router'),
  App = require('../../src/js/app');

global.App = App;

describe('goalView', function() {

  describe('button event handlers', function() {

    beforeEach(function() {
      goalviewPage.setButtonEvents();
    });

    describe('left', function() {

      xit('should have tests');

    });

    describe('right', function() {

      xit('should have tests');

    });

    describe('top', function() {

      xit('should have tests');

    });

    describe('bottom', function() {

      xit('should have tests');

    });

    describe('face', function() {

      xit('should have tests');

    });

  });

  describe('rendering', function() {

    it('should produce the correct HTML', function() {
      goalviewPage.render();
      var html = goalviewPage.$el.html();
      expect(html).toContainText('goalView');
    });

    it('returns the view object', function() {
      expect(goalviewPage.render()).toEqual(goalviewPage);
    });

  });

});
