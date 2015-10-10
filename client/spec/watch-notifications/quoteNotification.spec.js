'use strict';

var WatchNotification = require('../../src/js/framework/watchNotification');
var QuoteNotification = require('../../src/js/watch-notifications/quoteNotification');

global.App = require('../../src/js/app');

describe('Quote Notifications', function() {

  var quoteNotification;

  beforeEach(function() {
    quoteNotification = new QuoteNotification();
    setFixtures('<div id="watch-face" />');
  });

  describe('Rendering', function() {
    it('should append itself to the view for the current page', function() {
      quoteNotification.render();
      var watchFace = $('#watch-face');
      expect(watchFace).toContainElement('div');
    });

    xit('should display the message', function() {
      quoteNotification.message = 'foo';
      quoteNotification.render();
      var watchFace = $('#watch-face');
      expect(watchFace.text()).toContain('foo');
    });

    it('should have the class quoteNotification', function() {
      expect(quoteNotification.className).toEqual('notification');
    });

    it('should return the view object', function() {
      expect(quoteNotification.render()).toEqual(quoteNotification);
    });

  });

});
