'use strict';
var clock = require('../framework/clock.js');

var notificationsConfig = [
    {
      label: 'Welcome to school!',
      notificationType: 'arriveAtSchoolNotification',
      defaultValue: 'Welcome to school! +1 point.'
    },
    {
      label: 'End of day score',
      notificationType: 'endofDaySchoolNotification'
    },
    {
      label: '9:00AM: Start of the day Quote',
      notificationType: 'quoteNotification'
    },
    {
      label: '3:30PM: End of the day Quote',
      notificationType: 'quoteNotification'
    }

];

module.exports = notificationsConfig;

// check if 3:00, then push it on.
