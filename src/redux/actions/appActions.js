import {
  SET_EXAMPLE_DATA,
  EXAMPLE_ACTION,
} from './constants';

export function exampleAction() {
  return {
    type: EXAMPLE_ACTION,
  };
}

export function setExampleData(data) {
  return {
    type: SET_EXAMPLE_DATA,
    payload: data,
  };
}
