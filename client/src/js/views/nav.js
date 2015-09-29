'use strict';

var NavView = Backbone.View.extend({

  template: require('../../templates/views/navPage.hbs'),

  initialize: function() {
    _.bindAll(this, 'render');
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }

});

module.exports = NavView;
