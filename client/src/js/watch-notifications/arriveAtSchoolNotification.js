'use strict';

var WatchNotification = require('../framework/watchNotification');
var App = require('../app');
global.App = App;

var ArriveAtSchoolNotification = WatchNotification.extend({

  // add and test custom render method
  // increment score in render method
  // test correct score is displayed in tempalte

  render: function() {
    global.console.log('SCORE (before): ' + global.App.score);
    global.App.score = global.App.score + 1;
    global.App.pointsGainedToday = global.App.pointsGainedToday + 1;
    global.console.log('SCORE (after): ' + global.App.score);
    global.console.log('POINTS GAINED TODAY: ' + global.App.pointsGainedToday);

    this.$el.html(this.template({message: this.message}));

    $('#watch-face').append(this.$el);

    this.setButtonEvents();
    return this;
  }

});

module.exports = ArriveAtSchoolNotification;
