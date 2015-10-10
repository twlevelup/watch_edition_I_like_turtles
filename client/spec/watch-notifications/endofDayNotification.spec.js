'use strict';

var EndofDaySchoolNotification = require('../../src/js/watch-notifications/endofDayNotification');

global.App = require('../../src/js/app');

describe('Watch Notifications', function() {

  var endofDaySchoolNotification;

  beforeEach(function() {
    endofDaySchoolNotification = new EndofDaySchoolNotification();
    setFixtures('<div id="watch-face" />');
  });

  describe('Rendering', function(){
    it('should have the class endofDaySchoolNotification', function(){
      expect(endofDaySchoolNotification.className).toEqual('notification');

    });
      it('should display the score message', function(){
        global.App.score= 2;
        global.App.pointsGainedToday = 1;
        endofDaySchoolNotification.render();
        var watchFace = $('#watch-face');
        var messageToExpect = 'Total points this day: ' + global.App.score;
        expect(watchFace.text()).toContain(messageToExpect);

      });
  });


});
