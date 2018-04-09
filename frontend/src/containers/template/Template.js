import React from 'react';
import PropTypes from 'prop-types';
import { LARGE, SMALL } from 'material-ui/utils/withWidth';
import Header from './top/Header';
import LeftDrawer from './side/LeftDrawer';
import Data from './data';

class Template extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: false
    };
  }
  componentWillMount() {
    if (this.props.width === LARGE) {
      this.setState({ navDrawerOpen: true });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({ navDrawerOpen: nextProps.width === LARGE });
    }
  }
  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }

  render() {
    const { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = 236;

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
      }
    };

    return (
        <div>
          <Header
            styles={styles.header}
            handleChangeRequestNavDrawer= {this.handleChangeRequestNavDrawer.bind(this)}
          />
          <LeftDrawer
            navDrawerOpen={navDrawerOpen}
            menus={Data.menus}
            username={localStorage.email}
            onChange={this.handleChangeRequestNavDrawer.bind(this)}
            width={this.props.width}
          />
          <div style={styles.container}>
            {this.props.children}
          </div>
        </div>
    );
  }
}

Template.propTypes = {
  children: PropTypes.element,
  width: PropTypes.number
};

export default Template;
