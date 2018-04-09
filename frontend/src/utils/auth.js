import * as util from './Utility';

const jwtDecode = require('jwt-decode');

export function logoutApplication() {
  const decoded = jwtDecode(util.getToken());
  let tokenTime = decoded.exp;
  tokenTime = new Date(tokenTime * 1000);
  const systemTime = new Date();
  const diff = (tokenTime - systemTime);
  if (diff < 0) {
    util.goTo('logout');/* Logout the user if the user session is expired.*/
  }
}
