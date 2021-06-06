import { TRACKER_ADD, TRACKER_STARTED, TRACKER_DEL } from './../constants.js';

const makeIdGenerator =
  (idCounter = 4) =>
  () =>
    (idCounter += 1);
const setId = makeIdGenerator();

const initState = [
  {
    id: 0,
    text: 'No name tracker #1',
    started: false,
  },
  {
    id: 1,
    text: 'No name tracker #2',
    started: true,
  },
  {
    id: 2,
    text: '3 Long name Yeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaah Tracker',
    started: false,
  },
];

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case TRACKER_ADD: {
      return [
        {
          id: setId(),
          text: action.payload,
          started: true,
        },
        ...state,
      ];
    }
    case TRACKER_DEL: {
      return state.filter(tracker => tracker.id !== action.payload);
    }
    case TRACKER_STARTED: {
      return state.map(tracker => {
        if (tracker.id === action.payload) {
          return {
            ...tracker,
            started: !tracker.started,
          };
        }

        return tracker;
      });
    }
    default:
      return state;
  }
};
