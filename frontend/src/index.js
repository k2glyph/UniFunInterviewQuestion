import 'babel-polyfill';
import 'font-awesome/css/font-awesome.css';
import 'flexboxgrid/css/flexboxgrid.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './views/styles.scss';
import './views/form.scss';

import configureStore from './store/store';

injectTapEventPlugin();

const store = configureStore(undefined);

render(
	  <Provider store={store}>
	    <Router routes={routes} history={browserHistory} />
	  </Provider>,
  document.getElementById('root')
);
