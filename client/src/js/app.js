'use strict';

var Router = require('./router'),
  WatchFace = require('./framework/watchFace'),
  clock = require('./framework/clock');

  var notification = require('./framework/notification');

var App = {

  buttons: ['left', 'right', 'top', 'bottom', 'face'],

  vent: _.extend({}, Backbone.Events),

  notifications: {},

  router: new Router(),

  watchFace: new WatchFace(),

  navigate: function (route) {
    App.router.navigate(route, true);
  },

  // TODO probably want to use new instead and pass options through initialize
  // TODO figure out something to do with notification queing or blocking when one is active
  displayNotification: function (notificationType, opts) {
    App.notifications[notificationType].message = opts.message;
    App.notifications[notificationType].render();
  },

  // TODO load the notifications from a directory
  loadNotification: function (notificationType, notificationConstructor) {
    App.notifications[notificationType] = notificationConstructor;
    App.vent.on(notificationType, function (opts) {
      App.displayNotification(notificationType, opts);
    }, this);
  },

  setupWatchButtons: function () {
    // FIXME Make a view for the watch and make these regular view events

    $('#button-right').on('click', function() {
      App.vent.trigger('right');
    });

    $('#button-top').on('click', function() {
      App.vent.trigger('top');
    });

    $('#button-bottom').on('click', function() {
      App.vent.trigger('bottom');
    });

    $('#button-left').on('click', function() {
      App.vent.trigger('left');
    });

    $('#watch-face').on('click', function() {
      App.vent.trigger('face');
    });
  },

  start: function() {

    // TODO replace this with something more generic
    var DummyNotification = notification.extend({});
    this.loadNotification('dummyNotification', new DummyNotification());

    this.setupWatchButtons();

    clock.start();

    if (Backbone.history && !Backbone.History.started) {
      Backbone.history.start();
    }

  }

};

// TODO look at what happens if this returns new App();

global.App = App;

module.exports = App;
