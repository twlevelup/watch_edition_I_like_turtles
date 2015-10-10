




'use strict';

var WatchNotification = require('../framework/watchNotification');
var App = require('../app');
global.App = App;

var EndofDaySchoolNotification = WatchNotification.extend({

  // add and test custom render method
  // increment score in render method
  // test correct score is displayed in tempalte

  render: function() {

    var message = 'You gained: ' + global.App.pointsGainedToday + ' points today! \n\r ___________________ \n\r' + ' Total points this day: ' + global.App.score + '!';

    this.$el.html(this.template({message: message}));

    $('#watch-face').append(this.$el);

    this.setButtonEvents();
    return this;
  }

});

module.exports = EndofDaySchoolNotification;
