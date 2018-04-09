import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import withWidth from 'material-ui/utils/withWidth';
import ThemeDefault from './template/theme-default';

class App extends React.Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={ThemeDefault}>
          <div>
            {React.cloneElement(this.props.children, { width: this.props.width })}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
    width: PropTypes.number
};

export default withWidth()(App);
