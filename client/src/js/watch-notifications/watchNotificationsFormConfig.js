'use strict';

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
    },
    {
      label: 'End of day quote',
      notificationType: 'dummyNotification',
      defaultValue: 'This is the end of day quote.'
    }
];

module.exports = notificationsConfig;

// check if 3:00, then push it on.
