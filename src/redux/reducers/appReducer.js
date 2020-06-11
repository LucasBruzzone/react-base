import { fromJS } from 'immutable';

import {
  SET_EXAMPLE_DATA,
} from '../actions/constants';

export const initialState = fromJS({
  exampleData: 'Change value',
});

function appReducer(state = initialState, action) {
  switch (action.type) {
  case SET_EXAMPLE_DATA:
    return state.set('exampleData', action.payload);
  default:
    return state;
  }
}

export default appReducer;
