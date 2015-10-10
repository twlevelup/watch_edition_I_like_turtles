'use strict';
var clock = require('../framework/clock.js');

// var app = require('../app');

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
      label: 'Welcome to school!',
      notificationType: 'arriveAtSchoolNotification',
      defaultValue: 'Welcome to school! +1 point.'
    },
    {
      label: 'End of day score',
      notificationType: 'endofDaySchoolNotification',
    }
];

notificationsConfig.push(EODquote);
notificationsConfig.push(SODquote);

module.exports = notificationsConfig;

// check if 3:00, then push it on.
