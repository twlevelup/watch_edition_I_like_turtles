'use strict';

var targetdisplayPage = require('../../src/js/pages/targetdisplayPage'),
  Router = require('../../src/js/framework/router'),
  App = require('../../src/js/app');

global.App = App;

describe('targetDisplay', function() {

  describe('button event handlers', function() {

    beforeEach(function() {
      targetdisplayPage.setButtonEvents();
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
      targetdisplayPage.render();
      var html = targetdisplayPage.$el.html();
      expect(html).toContainText('Current Score');
    });

    it('returns the view object', function() {
      expect(targetdisplayPage.render()).toEqual(targetdisplayPage);
    });

  });

});
