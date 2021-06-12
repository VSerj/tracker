import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducer } from './reducers/reducer.js';

// let preloadedState;
// const persisteTrackerString = localStorage.getItem('trackers');

// if (persisteTrackerString) {
//   preloadedState = JSON.parse(persisteTrackerString);
// }

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
