import axios from 'axios';
import * as types from './actionTypes';
import * as constant from '../../config/Constants';
import * as util from '../../utils/Utility';
import setAuthorizationToken from '../../utils/setAuthorizationToken';

const ROOT_URL = constant.LOGIN_DOMAIN;
const browserStorage = (typeof localStorage === 'undefined') ? null : localStorage;

function loginRequest() {
  return {
    type: types.CURRENT_USER,
  };
}
function loginSuccess(json) {
  return {
    type: types.CURRENT_USER_SUCCESS,
    payload: json,
  };
}
function successLogin(json) {
  return (dispatch) => {
    setAuthorizationToken(json.email)
	  .then(() => { //eslint-disable-line
    dispatch(loginSuccess(json));
  }).catch(error => console.log(error.toString()));
  };
}

function errorLogin(json) {
  return {
    type: types.CURRENT_USER_FAILURE,
    payload: json,
  };
}
export function logOut() {
  return {
    type: types.CURRENT_USER_LOGOUT,
  };
}
export function userLoginRequest(user) {
  return (dispatch) => {
    dispatch(loginRequest());
    // const data = response.data;
    if(user.email==='demo@unifun.com' && user.password==='demo') {
      setTimeout(()=>{
        browserStorage.setItem('token', user.email);
        dispatch(successLogin(user));
      }, 1000);
    }else {
      dispatch(errorLogin('Error Username and password'));
    }
  };
}
