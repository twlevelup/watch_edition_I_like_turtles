'use strict';

var NavPage = require('../../src/js/pages/navPage.js'),
  App = require('../../src/js/app');

global.App = App;

describe('nav', function() {

  var navPage;

  beforeEach(function() {
    navPage = new NavPage();
  });

  describe('button event handlers', function() {

    beforeEach(function() {
      navPage.setButtonEvents();
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

    it('should produce the correct HTML on navPage', function() {
      navPage.render();
      var html = navPage.$el.html();
      expect(navPage.$el).toContainHtml('<div id="map"></div>');
    });

    it('returns the view object', function() {
      expect(navPage.render()).toEqual(navPage);
    });

  });

});
