'use strict';

var CheterPage = require('../../src/js/pages/cheterPage'),
  Router = require('../../src/js/router.js'),
  App = require('../../src/js/app');

global.App = App;

describe('The Cheter Page', function() {

  var cheterPage;

  beforeEach(function() {
    cheterPage = new CheterPage();
  });

  describe('button events', function() {

    beforeEach(function() {
      cheterPage.setButtonEvents();
    });

    describe('right', function() {
      it('should take the user to the contacts page', function() {
        spyOn(global.App, 'navigate');
        cheterPage.trigger('right');
        expect(global.App.navigate).toHaveBeenCalledWith('contacts');
      });
    });
  });

  describe('rendering', function() {

    it('returns the view object', function() {
      expect(cheterPage.render()).toEqual(cheterPage);
    });

    it('should produce the correct HTML', function() {
      cheterPage.render();
      expect(cheterPage.$el).toContainHtml ('<h1>Hello, World!</h1>');
    });

  });

});
