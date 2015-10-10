'use strict';
var clock = require('../framework/clock.js');

var app = require('../app');

var EODquote =
     {
       label: 'End of the day Quote',
       notificationType: 'dummyNotification',
       defaultValue: '"I get nervous when I don\'t get nervous. If I\'m nervous I know I\'m going to have a good show." -Beyonce'
     };
var SODquote =
     {
       label: 'Start of the day Quote',
       notificationType: 'dummyNotification',
       defaultValue: '"Who run the world? Girls!" -Beyonce'
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
      notificationType: 'arriveAtSchoolNotification',
      defaultValue: 'Welcome to school! +1 point.', 
    },
    {
      label: 'End of day quote',
      notificationType: 'dummyNotification',
      defaultValue: 'This is the end of day quote.'
    },
    {
      label: 'End of day score',
      notificationType: 'dummyNotification',
      defaultValue: 'You gained: ' + app.pointsGainedToday + ' points today! \n\r ___________________' + ' Total points this day: ' + app.score + '!'
    }
];
notificationsConfig.push(EODquote);
notificationsConfig.push(SODquote);
module.exports = notificationsConfig;

// check if 3:00, then push it on.
