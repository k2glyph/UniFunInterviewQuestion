import thunkMiddleware from 'redux-thunk';

import  { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(state) {
  if (process.env.NODE_ENV !== 'production') {
    const store = createStore(
      rootReducer,
      state,
      applyMiddleware(
        thunkMiddleware
      ),
    );
    if (module.hot) {
      module.hot.accept('../reducers',() => {
        const nextReducer = require('../reducers');//eslint-disable-line
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();//eslint-disable-line
        store.replaceReducer(nextReducer);
      });
    }
    return store;
  }
  const store =
  createStore(rootReducer,
     applyMiddleware(thunkMiddleware));
  return store;
}
