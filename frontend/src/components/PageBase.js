import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import {typography} from 'material-ui/styles';
import {grey600} from 'material-ui/styles/colors';


const PageBase = (props) => {

    const {title, navigation} = props;

    return (
      <div>
        <span style={styles.navigation}>{navigation}</span>
        <Paper style={styles.paper}>
          <h3 style={styles.title}>{title}</h3>
          <Divider/>
          {props.children}
          <div style={styles.clear}/>
        </Paper>
      </div>
    );
};

PageBase.propTypes = {
  title: PropTypes.string,
  navigation: PropTypes.string,
  children: PropTypes.element
};

const styles = {
    navigation: {
      fontSize: 15,
      fontWeight: typography.fontWeightLight,
      color: grey600,
      paddingBottom: 15,
      display: 'block'
    },
    title: {
      fontSize: 24,
      fontWeight: typography.fontWeightLight,
      marginBottom: 20
    },
    paper: {
      padding: 30
    },
    clear: {
      clear: 'both'
    }
  };

export default PageBase;