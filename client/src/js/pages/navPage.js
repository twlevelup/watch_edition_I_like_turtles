'use strict';

var PageView = require('../framework/page');

var NavPage = PageView.extend({

  id: 'nav-page',

  template: require('../../templates/pages/navPage.hbs'),

  buttonEvents: {
    right: '',
    top: '',
    left: 'goToHome',
    bottom: '',
    face: ''
  },

  goToHome: function() {
    global.App.navigate('');
  },

  render: function() {

    this.$el.html(this.template());
    return this;
  }
});

module.exports = new NavPage();
