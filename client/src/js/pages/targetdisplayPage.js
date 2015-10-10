'use strict';

var PageView = require('../framework/page');

var TargetdisplayPage = PageView.extend({

  id: 'targetdisplay-page',

  template: require('../../templates/pages/targetdisplayPage.hbs'),

  buttonEvents: {
    right: '',
    left: 'goToGoal',
    top: '',
    bottom: '',
    face: ''
  },

  goToGoal: function() {
    global.App.navigate('goal');
  },

  render: function() {

    this.$el.html(this.template());

    return this;

  }

});

module.exports = new TargetdisplayPage();
