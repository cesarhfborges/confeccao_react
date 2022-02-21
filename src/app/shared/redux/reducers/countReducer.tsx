import {COUNTER_CHANGE} from '../constants';

const initialState = {
  count: 0,
};

// @ts-ignore
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_CHANGE:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};
export default countReducer;
