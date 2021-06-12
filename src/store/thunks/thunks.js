import { addTrackerWithName } from './../actionCreators/actionCreators.js';

export const addTracker = text => {
  if (!text.length) {
    text = new Date().toLocaleString();
  }

  return dispatch => {
    dispatch(addTrackerWithName(text));
  };
};
