import { combineReducers } from 'redux';
import logReducer from './logReducer';

const rootReducer = combineReducers({
  log: logReducer
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;
