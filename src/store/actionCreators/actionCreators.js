import { TRACKER_ADD, TRACKER_STARTED, TRACKER_DEL } from './../constants.js';

export const addTrackerWithName = text => ({
  type: TRACKER_ADD,
  payload: text,
});

export const delTracker = id => ({
  type: TRACKER_DEL,
  payload: id,
});

export const startedTracker = id => ({
  type: TRACKER_STARTED,
  payload: id,
});
