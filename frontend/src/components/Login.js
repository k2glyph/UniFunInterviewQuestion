import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import { login } from '../helpers/auth';

function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}

class Login extends Component {
  constructor() {
    super();
    this.loginUser = this.loginUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state ={
      email: '',
      password: '',
      logining: false
    };
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  loginUser() {
    this.setState({ logining: true });
    login(this.state.email, this.state.password)
    .catch((error) => {
      this.setState(setErrorMsg(error.message));
      this.setState({ logining: false });
    });
  }
  render() {
    const { containerStyle, loginContainerStyle, formContainerStyle,
      submitButtonContainerStyle, buttonStyle, errorStyle }  = styles;
      const { logining } = this.state;
    return (
      <div style={containerStyle}>
          <Paper style={loginContainerStyle}>

          <form onSubmit={(e) => { e.preventDefault(); e.stopPropagation(); this.loginUser() }}>
            <div style={formContainerStyle}>
              <center><h1><img src="logo.png" role="presentation" /></h1></center>
                {
                  this.state.loginMessage &&
                  <div style={errorStyle}>
                    {this.state.loginMessage}
                  </div>
                }
              <TextField
                type="email" hintText="E-mail"
                fullWidth onChange={this.handleChange} name="email" required
              />
              <TextField
                type="password" hintText="Password" name="password"
                fullWidth
                onChange={this.handleChange}
                required
              />
          </div>
          <div style={submitButtonContainerStyle}>
              <RaisedButton disabled={logining} type='submit'style={buttonStyle} label="Login" primary />
              <RaisedButton disabled={logining} type='reset' style={buttonStyle} label="Reset" />
          </div>
        </form>
          </Paper>
      </div>
    )
  }
}

const styles = {
  containerStyle: {
    display: 'flex',
    alginItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,

  },
  loginContainerStyle: {
    width: 300,
    marginTop: 40,

  },
  formContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  submitButtonContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonStyle: {
    margin: 12,
  },
  errorStyle: {
    color: '#ff0000',
    textAlign: 'center',
  }
}
export default Login;
