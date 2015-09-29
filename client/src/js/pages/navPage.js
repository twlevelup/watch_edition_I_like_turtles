'use strict';

var Page = require('../framework/page');

var NavPage = Page.extend({

  id: 'nav-page',

  initialize: function() {

  },

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

module.exports = NavPage;
