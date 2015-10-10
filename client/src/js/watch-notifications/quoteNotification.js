'use strict';

var WatchNotification = require('../framework/watchNotification');
var app = require('../app');

var index = 0;

var QuoteNotification = WatchNotification.extend({
  randomQuote: function() {
    var quotes = [
      '"When we do the best we can, we never know what miracle is wrought in our life, or in the life of another." – Helen Keller',
      '"Life is not measured by the number of breaths we take, but by the moments that take our breath away." – Maya Angelou',
      '"Life shrinks or expands in proportion to one’s courage." – Anais Nin',
      '"A woman is like a tea bag – you never know how strong she is until she gets in hot water." – Eleanor Roosevelt',
      '"A woman is the full circle. Within her is the power to create, nurture and transform." – Diane Mariechild',
      '"We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained." - Marie Curie',
      '"Who run the world? Girls!" - Beyoncé'
    ];

    var quote = quotes[Math.floor(Math.random() * quotes.length)];

    //index += 1;
    //index = index % quotes.length;
    //var quote = quotes[index];
    return quote;
  },

  render: function() {
   var quote = this.randomQuote;
   this.$el.html(this.template({message: quote}));

   $('#watch-face').append(this.$el);

   this.setButtonEvents();
   return this;
 }
});

module.exports = QuoteNotification;
