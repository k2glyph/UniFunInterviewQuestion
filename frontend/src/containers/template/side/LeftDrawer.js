import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { SMALL } from 'material-ui/utils/withWidth';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { spacing, typography } from 'material-ui/styles';
import { white, grey300, blue600 } from 'material-ui/styles/colors';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import NavigationExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import NavigationExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import { Link } from 'react-router';

class LeftDrawer extends Component {
  onChange() {
    if (this.props.width === SMALL) {
        this.props.onChange();
    }
  }
  render() {
    const { navDrawerOpen } = this.props;
    const { menuStyle, menuItem, menuTitleStyle } = styles;
    return (
      <Drawer docked open={navDrawerOpen}>
          <div style={styles.logo}>
            SmsSender
          </div>
          <div>
            {this.props.menus.map((menu, index) => {
              if (menu.subitems.length > 0) {
                return (<Card style={menuStyle} key={index}>
                   <CardHeader
                     title={menu.text}
                     style={menuItem}
                     titleStyle={menuTitleStyle}
                     avatar={menu.icon}
                     openIcon={<NavigationExpandMore color={white} />}
                     closeIcon={<NavigationExpandLess color={white} />}
                     actAsExpander={menu.subitems.length > 0 ? true : false}
                     showExpandableButton={menu.subitems.length > 0 ? true : false}
                   />
                   <CardText style={{ padding: 0, paddingLeft: 15, backgroundColor: 'rgb(47, 45, 45)' }} expandable>
                     {
                       menu.subitems.map((submenu, subindex) =>
                         <MenuItem
                           key={subindex}
                           style={{ color: grey300 }}
                           primaryText={submenu.text}
                           leftIcon={submenu.icon}
                           onTouchTap={this.onChange.bind(this)}
                           containerElement={<Link to={`${submenu.link}`} />}
                         />
                       )
                     }
                   </CardText>
                 </Card>);
              }
              return (
                <MenuItem
                  key={index}
                  style={{ color: grey300 }}
                  primaryText={menu.text}
                  leftIcon={menu.icon}
                  onTouchTap={this.onChange.bind(this)}
                  containerElement={<Link to={menu.link} />}
                />
              );
            })}
          </div>
      </Drawer>
    );
  }
}

LeftDrawer.propTypes = {
  navDrawerOpen: PropTypes.bool.isRequired,
  menus: PropTypes.array.isRequired,
};
const styles = {
  logo: {
    cursor: 'pointer',
    fontSize: 22,
    color: typography.textFullWhite,
    lineHeight: `${spacing.desktopKeylineIncrement}px`,
    fontWeight: typography.fontWeightLight,
    backgroundColor: blue600,
    paddingLeft: 40,
    height: 50,
  },
  menuStyle: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    fontWeight: 'normal',
  },
  menuTitleStyle: {
    color: '#fff',
    borderRadius: 0,
    backgroundColor: 'transparent',
    zDepthShadows: 'none',
    fontWeight: 'normal',
    marginLeft: 14,
    paddingTop: 3,
  },
  menuItem: {
    padding: 10,
    marginLeft: 8,
    backgroundColor: 'transparent',
    fontSize: 14,
    zDepthShadows: 'none',
  },
};
export default LeftDrawer;
