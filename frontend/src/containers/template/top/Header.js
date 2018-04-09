import React from 'react';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Setting from 'material-ui/svg-icons/action/settings';
import IconMenu from 'material-ui/IconMenu';
import { white } from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/svg-icons/navigation/menu';
import * as util from '../../../utils/Utility';

class Header extends React.Component {

  render() {
    const { styles, handleChangeRequestNavDrawer } = this.props;

    const style = {
      appBar: {
        position: 'fixed',
        top: 0,
        overflow: 'hidden',
        maxHeight: 57
      },
      menuButton: {
        marginLeft: 10
      },
      iconsRightContainer: {
        // marginLeft: 20
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }
    };

    return (
        <div>
            <AppBar
              style={{ ...styles, ...style.appBar }}
              iconElementLeft={
                  <IconButton style={style.menuButton} onClick={handleChangeRequestNavDrawer}>
                    <Menu color={white} />
                  </IconButton>
              }
              iconElementRight={
                <div style={style.iconsRightContainer}>
                    <div style={{ color: '#fff' }}>{util.getFirstName()}</div>
                    <IconMenu
                      color={white}
                      iconButtonElement={<IconButton><Setting color={white} /></IconButton>}
                      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                    >
                      {/* <MenuItem primaryText="Profile"  /> */}

                  </IconMenu>
                </div>
              }
            />
          </div>
      );
  }
}

Header.propTypes = {
  styles: PropTypes.object,
  handleChangeRequestNavDrawer: PropTypes.func.isRequired,
};

export default Header;
