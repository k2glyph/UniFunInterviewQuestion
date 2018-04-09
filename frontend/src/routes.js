import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {
  App, LoginPage, Template,
  Dashboard,
  SmsCrud } from './containers';
import * as LoginActions from './containers/Login/LoginAction';
import configureStore from './store/store';
import { NotFoundPage } from './components';

const store = configureStore();

const browserStorage = (typeof localStorage === 'undefined') ? null : localStorage;

function requireAuth(nextState, replace) {
  if (!browserStorage.token) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  } else {
    console.log('log out');
  }
}
function afterAuth(nextState, replace) {
  if (browserStorage.token) {
    replace({
      pathname: '/dashboard',
      state: { nextPathname: nextState.location.pathname },
    });
  }
}
function logout(nextState, replace) {
  browserStorage.removeItem('token');
  store.dispatch(LoginActions.logOut());
  console.log('Todo: logout ');
  replace({
    pathname: '/login',
    state: { nextPathname: nextState.location.pathname },
  });
}

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={LoginPage} onEnter={afterAuth} />
    <Route path="/login" component={LoginPage} onEnter={afterAuth} />
    <Route path="/logout" onEnter={logout} />
    <Route component={Template}onEnter={requireAuth}>
      <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
      <Route path="sms" component={SmsCrud} onEnter={requireAuth} />
      <Route path="/*" component={NotFoundPage} onEnter={requireAuth} />
    </Route>
    <Route path="/*" component={NotFoundPage} onEnter={requireAuth} />
  </Route>
);

export default routes;
