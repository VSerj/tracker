import { createStore } from 'redux';
import { reducer } from './reducers/reducer.js';

let preloadedState;
const persisteTrackerString = localStorage.getItem('trackers');

if (persisteTrackerString) {
  preloadedState = JSON.parse(persisteTrackerString);
}

const store = createStore(reducer, preloadedState);

export default store;
