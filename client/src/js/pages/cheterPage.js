'use strict';

var PageView = require('../framework/page');

var CheterView = PageView.extend({

  id: 'cheter',

  template: require('../../templates/pages/cheter.hbs'),

  buttonEvents: {
    right: 'goToContacts'
  },

  goToContacts: function() {
    global.App.navigate('contacts');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

module.exports = CheterView;
