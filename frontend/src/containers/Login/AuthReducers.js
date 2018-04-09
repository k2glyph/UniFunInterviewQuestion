import * as types from './actionTypes';
import * as util from '../../utils/Utility';

const INITIAL_STATE = { user: { isAuthenticated: false, loading: false, error: null } };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CURRENT_USER:
      return { ...state, user: { isAuthenticated: false, user: null, loading: true, error: null } };
    case types.CURRENT_USER_SUCCESS:
      util.goTo('dashboard');
      return { ...state, user: { isAuthenticated: true, loading: false, error: null } };
    case types.CURRENT_USER_FAILURE:
      return { ...state, user: { isAuthenticated: false, loading: false, error: action.payload } };
    case types.CURRENT_USER_LOGOUT:
      return { ...state, user: { isAuthenticated: false, loading: false } };
    default:
      return state;
  }
};
