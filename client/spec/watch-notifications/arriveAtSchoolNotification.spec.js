'use strict';

var ArriveAtSchoolNotification = require('../../src/js/watch-notifications/arriveAtSchoolNotification');

global.App = require('../../src/js/app');

describe('Watch Notifications', function() {

  var arriveAtSchoolNotification;

  beforeEach(function() {
    arriveAtSchoolNotification = new ArriveAtSchoolNotification();
    setFixtures('<div id="watch-face" />');
  });

  describe('Rendering', function() {
    it('should have the class arriveAtSchoolNotification', function() {
      expect(arriveAtSchoolNotification.className).toEqual('notification');

    });

    it('should increment the score by 1', function() {
        global.App.score = 0;
        arriveAtSchoolNotification.render();
        expect(global.App.score).toEqual(1);
      });

    it('should display the welcome message', function() {
        arriveAtSchoolNotification.message = 'foo';
        arriveAtSchoolNotification.render();
        var watchFace = $('#watch-face');
        expect(watchFace.text()).toContain('foo');
      });
  });

});
