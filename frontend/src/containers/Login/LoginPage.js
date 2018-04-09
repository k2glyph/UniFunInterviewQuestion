import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import * as loginActions from './LoginAction';

class LoginPage extends Component {
  componentDidUpdate() {
    // Alert.showAlert();
  }
  render() {
    const { isAuthenticated, loading, error } = this.props.auth;
    return (
      <div>
        <Login
        userLoginRequest={this.props.userLoginRequest}
        error={error}
        loading={loading} isAuthenticated={isAuthenticated}
        />
    </div>
  );
  }
}
const mapStateToProps = (state) => {//eslint-disable-line
  return {
    auth: state.auth.user,
  };
};
const mapDispatchToProps = (dispatch) => {//eslint-disable-line
  return {
    userLoginRequest: (user) => dispatch(loginActions.userLoginRequest(user))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
