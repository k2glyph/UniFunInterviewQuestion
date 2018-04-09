import axios from 'axios';

const setAuthorizationToken = (token) => { //eslint-disable-line
  return new Promise((resolve, reject) => {
    if (token) {
      console.log('settings aut header in axios');
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      resolve();
    } else {
      console.log('unsettings aut header in axios');
      delete axios.defaults.headers.common.Authorization;
      resolve();
    }

    reject('Could not set authorization headers in axios.');
  });
};

export default setAuthorizationToken;
