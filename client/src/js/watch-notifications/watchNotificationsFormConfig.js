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
      message: 'Welcome to school! +1 point'
    }
];

module.exports = notificationsConfig;
