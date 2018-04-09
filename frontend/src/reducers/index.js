import { combineReducers } from 'redux';
import AuthReducers from '../containers/Login/AuthReducers';
import SmsReducer from '../containers/smscrud/reducer';

export default combineReducers({
  auth: AuthReducers,
  sms: SmsReducer
});
