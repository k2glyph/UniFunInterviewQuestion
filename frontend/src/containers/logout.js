import React, { Component } from 'react';
import { logout } from '../helpers/auth';

class Logout extends Component {
  componentDidMount() {
    logout(); //logouting 
  }
  render() {
    return (
      <div>
        Logout.....
      </div>
    );
  }
}

export default Logout;
