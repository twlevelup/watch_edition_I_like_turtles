'use strict';
var clock = require('../framework/clock.js');
var quoteTimeF = clock.isQuoteTime();
var quote =
     {
       label: 'End of the day Quote',
       notificationType: 'dummyNotification',
       defaultValue: '"I get nervous when I don\'t get nervous. If I\'m nervous I know I\'m going to have a good show." -Beyonce'
     };
var notificationsConfig = [
    {
      label: 'Go to contacts on right button',
      notificationType: 'dummyNotification',
      defaultValue: 'Click right button to go to contacts.'
    },
    {
      label: 'Left button will be contacts now',
      notificationType: 'dummyNotification',
      defaultValue: 'Now left button will lead you to contacts.'
    },
    {
      label: 'No default message!',
      notificationType: 'dummyNotification'
    },
    {
      label: 'Welcome to school!',
      notificationType: 'dummyNotification',
      defaultValue: 'Welcome to school! +1 point',
      message: 'Welcome to school! +1 point.'
    }
];
if (quoteTimeF === true) {
  notificationsConfig.push(quote);
}

module.exports = notificationsConfig;

// check if 3:00, then push it on.
