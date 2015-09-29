'use strict';

var PageView = require('../framework/page');

var NavPage = PageView.extend({

  id: 'nav-page',

  template: require('../../templates/pages/navPage.hbs'),

  buttonEvents: {
    right: '',
    left: '',
    top: '',
    bottom: '',
    face: ''
  },

  render: function() {

    this.$el.html(this.template());
    return this;
  }
});

module.exports = new NavPage();
