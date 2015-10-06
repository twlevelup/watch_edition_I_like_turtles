'use strict';

var PageView = require('../framework/page');

var HomeScreen = PageView.extend({

  id: 'home',

  template: require('../../templates/pages/home.hbs'),

  buttonEvents: {
    right: '',
    top: '',
    bottom: '',
    left: 'goToMap'
  },

  goToMap: function() {
    global.App.navigate('nav');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = new HomeScreen();
