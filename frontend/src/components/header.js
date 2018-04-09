import React from 'react';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import { typography } from 'material-ui/styles';
import { blue600, white } from 'material-ui/styles/colors';
import Refresh from 'material-ui/svg-icons/navigation/refresh';

const Header = ({ title, children, reload, customButton }) => {
  const { headerStyle, openTicketStyle } = styles;
  return (
    <Subheader style={headerStyle}>
      {title}
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
        {children}
        {reload ? <IconButton default label="Reload" style={openTicketStyle} onTouchTap={reload}><Refresh  color={white}/> </IconButton> : ''}
      </div>
   </Subheader>
  );
};
const styles = {
  headerStyle: {
    fontSize: 24,
    fontWeight: typography.fontWeightLight,
    backgroundColor: blue600,
    color: white,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  openTicketStyle: {
    color: 'white',
    backgroundColor: 'transparent',
    marginLeft: 5,
  }
};

export { Header };
