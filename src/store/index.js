import {applyMiddleware, compose, createStore as createReduxStore} from 'redux';
import ReduxThunk from 'redux-thunk';

const composeEnhancers =
  (process.env['NODE_ENV'] === 'development' &&
    window != null &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ != null &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true
    })) ||
  compose;

export function createStore() {
  return createReduxStore(
    state => state,
    composeEnhancers(applyMiddleware(ReduxThunk))
  );
}
