import { combineReducers } from 'redux';
import appReducer, { initialState as appReducerInitialState } from './appReducer';

export const initialAppState = {
  appReducer: appReducerInitialState,
};

const mainReducer = combineReducers({
  appReducer,
});

const rootReducer = (state, action) => mainReducer(state, action);

export default rootReducer;
