import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import globalStyles from './styles';

const PageBase = ({ title, navigation, children }) => {//eslint-disable-line
    return (
      <div>
        <span style={globalStyles.navigation}>{navigation}</span>
        <Paper style={globalStyles.paper}>
          <h3 style={globalStyles.title}>{title}</h3>
          <Divider />
          {children}
          <div style={globalStyles.clear} />
        </Paper>
      </div>
    );
};

PageBase.propTypes = {
  title: PropTypes.string,
  navigation: PropTypes.string,
  children: PropTypes.element
};

export default PageBase;
