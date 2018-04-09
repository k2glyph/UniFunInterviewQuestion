import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Notification from 'material-ui/svg-icons/communication/message';
import Logout from 'material-ui/svg-icons/action/exit-to-app';
import { grey600 } from 'material-ui/styles/colors';

const data = {
  menus: [
    { text: 'Dashboard', icon: <Assessment color={grey600} />, link: '/dashboard', subitems: [] },
    {
      text: 'SMS',
      icon: <Notification color={grey600} />,
      subitems: [
        { text: 'SMS', icon: <Notification color={grey600} />, link: '/sms', subitems: [] },
      ] },
    { text: 'LogOut', icon: <Logout color={grey600} />, link: '/logout', subitems: [] },
  ],
};
export default data;
