import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue600, grey900 } from 'material-ui/styles/colors';

const themeDefault = getMuiTheme({
  appBar: {
    height: 50,
    color: blue600
  },
  drawer: {
    width: 230,
    color: grey900
  },
  raisedButton: {
    primaryColor: blue600,
  }
});


export default themeDefault;
