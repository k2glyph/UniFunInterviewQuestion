import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Recaptcha from 'react-recaptcha';
import TextField from 'material-ui/TextField';
import * as util from '../../utils/Utility';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    console.log('Todo: check and go to dashboard');
    // this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
    //   if (user && this.props.isAuthenticated) {
    //     util.goTo('dashboard');
    //   }
    // });
  }
  componentWillUnmount() {
    // this.removeListener();
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.userLoginRequest(this.state);
  }
  render() {
    const { loading, error } = this.props;
    return (
      <div style={styles.loginContainer}>
        <Paper style={styles.paper}>
          <form onSubmit={this.onSubmit}>
            <center>
              <h1 style={{ color: 'orange' }}>
                UniFun Sms Sender
              </h1>
            </center>
            <center><div style={{ color: 'red' }}>{error}</div></center>
            <TextField
              type="email" hintText="E-mail"
              fullWidth onChange={this.onChange} name="email" required
            />
            <TextField
              type="password" hintText="Password" name="password"
              fullWidth
              onChange={this.onChange} required
            />
            <div>
              <RaisedButton
                type="submit" label="Login" primary
                style={styles.loginBtn}
                value={loading ? 'Loading...' : 'Login'} disabled={loading}
              />
              <h5>{'Email: demo@unifun.com and password: demo'}</h5>
            </div>
          </form>
        </Paper>
      </div>
    );
  }
}
const styles = {
  loginContainer: {
    minWidth: 300,
    maxWidth: 400,
    height: 'auto',
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    margin: 'auto',
  },
  paper: {
    padding: 20,
    overflow: 'auto',
  },
  forgetButton: {
    style: {
      float: 'left',
      paddingTop: 10,
    },
  },
  loginBtn: {
    float: 'right',
    marginTop: 10,
  },
};
Login.PropTypes = {
  userLoginRequest: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool.isRequired,
  error: React.PropTypes.string.isRequired,
  isAuthenticated: React.PropTypes.bool.isRequired,
};

export default Login;
