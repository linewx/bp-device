import thunk from 'redux-thunk';
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';

import reducers from '../reducers';

function reduxStore(initialState) {
  const enhancer = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );
  const store = createStore(reducers, initialState, enhancer);

  /* const store = createStore(reducers, initialState,
    window.devToolsExtension && window.devToolsExtension()); */

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      // We need to require for hot reloadign to work properly.
      const nextReducer = require('../reducers');  // eslint-disable-line global-require

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

export default reduxStore;
