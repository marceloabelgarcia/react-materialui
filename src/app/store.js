import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

let middlewares = [thunk];
if (process.env.NODE_ENV !== 'production') {
  // Implement redux logger for development
  const logger = createLogger();
  middlewares = [...middlewares, logger];
}

export default createStore(reducers, applyMiddleware(...middlewares));
