import {
  EXAMPLE_ACTION,
} from './constants';

export function exampleAction(data) {
  return {
    type: EXAMPLE_ACTION,
    payload: data,
  };
}
