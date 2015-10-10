'use strict';

var WatchNotification = require('../framework/watchNotification');
var app = require('../app');

var ArriveAtSchoolNotification = WatchNotification.extend({

  // add and test custom render method
  // increment score in render method
  // test correct score is displayed in tempalte
  render: function() {
    global.App.score = global.App.score + 1;
    this.$el.html(this.template({message: this.message}));

    $('#watch-face').append(this.$el);

    this.setButtonEvents();
    return this;
  }

});

module.exports = ArriveAtSchoolNotification;
