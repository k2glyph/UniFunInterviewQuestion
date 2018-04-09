import { browserHistory } from 'react-router';
import jwtDecode from 'jwt-decode';

const browserStorage = (typeof localStorage === 'undefined') ? null : localStorage;
export const isNumber = (n) => { //eslint-disable-line
  return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
};
export const findDomainType = (domainname) => {
  const extension = domainname.substring(domainname.length - 2);
  return extension;
};
export const isEmpty = (obj) => {
    // null and undefined are "empty"
  if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
  if (obj.length > 0) return false;
  if (obj.length === 0) return true;

    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
  if (typeof obj !== 'object') return true;
    // Is it empty?  Depends on your application.

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (const key in obj) {//eslint-disable-line
      if (hasOwnProperty.call(obj, key)) return false;
    }

  return true;
};
export const getUserId = () => { //eslint-disable-line
  try {
    const decoded = jwtDecode(browserStorage.token);
    return decoded.userid;
  } catch (err) {
  }
};
export const getCurrecyCode = () => { //eslint-disable-line
  try {
    const decoded = jwtDecode(browserStorage.token);
    return decoded.currency_code;
  } catch (err) {
    console.log(err);
  }
};
export const getEmail = () => { //eslint-disable-line
    return 'demo@unifun.com';
};
export const getFirstName = () => { //eslint-disable-line
    return 'demo';
};
export const getToken = () => {  //eslint-disable-line
  try {
    return browserStorage.token;
  } catch (err) {
    // console.log(err);
  }
};
export const goTo = (url) => {
  try {
    browserHistory.push(url);
  } catch (err) {
    console.log(err);
  }
};
