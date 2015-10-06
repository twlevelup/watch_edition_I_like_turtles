'use strict';

var homePage = require('../../src/js/pages/homePage'),
  Router = require('../../src/js/framework/router'),
  App = require('../../src/js/app');

global.App = App;

describe('The Home Page', function() {

  describe('button event handlers', function() {

    describe('left', function() {
      it('should go to map page', function() {
        spyOn(homePage, 'goToMap');
        homePage.setButtonEvents();
        global.App.vent.trigger('left');
        expect(homePage.goToMap).toHaveBeenCalled();
      });
    });

  });

  describe('rendering', function() {

    it('should produce the correct HTML', function() {
      homePage.render();
      expect(homePage.$el).toContainText('Click the left button to view the map');
    });

    it('returns the view object', function() {
      expect(homePage.render()).toEqual(homePage);
    });

  });

});
