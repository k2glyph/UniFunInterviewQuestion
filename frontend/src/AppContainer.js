import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import withWidth from 'material-ui/utils/withWidth';
import { LoadingPage } from './components';
import { NotificationsList } from './containers';
import { firebaseAuth } from './config/constants';

const Login = Loadable({
  loader: () => import('./components/Login'),
  loading: () => <LoadingPage />,
  delay: 300,
  timeout: 10000
});
const Template = Loadable({
  loader: () => import('./containers/template/Template'),
  loading: () => <LoadingPage />,
  delay: 300,
  timeout: 10000
});
const App = Loadable({
  loader: () => import('./containers/App'),
  loading: () => <LoadingPage />,
  delay: 300,
  timeout: 10000
});
const Dashboard = Loadable({
  loader: () => import('./containers/dashboard/Dashboard'),
  loading: () => <LoadingPage />,
  delay: 300,
  timeout: 10000
});
const logout = Loadable({
  loader: () => import('./containers/logout'),
  loading: () => <LoadingPage />,
  delay: 300,
  timeout: 10000
});

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}

function PublicRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
      : <Redirect to='/dashboard' />}
    />
  );
}

class AppContainer extends Component {
  state = {
    authed: false,
    loading: false,
  }
  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        });
      } else {
        this.setState({
          authed: false,
          loading: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }
  render() {
    return this.state.loading === true ?<h1>loading...</h1> : (
      <BrowserRouter>
        <Switch>
          <PublicRoute authed={this.state.authed} path="/login" component={Login} />
          <PrivateRoute authed={this.state.authed} path='/logout' component={logout} />
          <App width={this.props.width}>
            <Template>
              <PrivateRoute authed={this.state.authed} path='/dashboard' component={Dashboard} />
              <PrivateRoute authed={this.state.authed} path='/notifications' component={NotificationsList} />
            </Template>
          </App>
          <Route render={() => <h3>No Match</h3>} />
        </Switch>
      </BrowserRouter>
   );
  }
}


export default withWidth()(AppContainer);;
