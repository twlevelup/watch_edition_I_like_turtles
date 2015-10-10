'use strict';

var PageView = require('../framework/page');

var HomeScreen = PageView.extend({

  id: 'home',

  template: require('../../templates/pages/home.hbs'),

  buttonEvents: {
    right: '',
    top: 'goToMap',
    bottom: 'goToGoal',
    left: ''
  },

  goToMap: function() {
    global.App.navigate('nav');
  },

  goToGoal: function() {
    global.App.navigate('goal');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = new HomeScreen();
