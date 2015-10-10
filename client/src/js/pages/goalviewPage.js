'use strict';

var PageView = require('../framework/page');

var GoalviewPage = PageView.extend({

  id: 'goalview-page',

  template: require('../../templates/pages/goalviewPage.hbs'),

  buttonEvents: {
    right: 'goToTarget',
    top: 'goToHome',
    left: 'goToHome',
    bottom: '',
    face: ''
  },
  goToHome: function() {
    global.App.navigate('');
  },

  goToTarget: function() {
    global.App.navigate('target');
  },

  render: function() {

    this.$el.html(this.template());

    return this;

  }

});

module.exports = new GoalviewPage();
