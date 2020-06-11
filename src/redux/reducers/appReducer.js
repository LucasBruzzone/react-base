import { fromJS } from 'immutable';

import {
  EXAMPLE_ACTION,
} from '../actions/contants.js';

export const initialState = fromJS({
  exampleData: {},
});

function appReducer(state = initialState, action) {
  switch (action.type) {
  case EXAMPLE_ACTION:
    return state.set('userData', action.userData);
  default:
    return state;
  }
}

export default appReducer;
