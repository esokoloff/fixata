import { GET_LOGS, LogActionTypes } from './types';
import { LogStateProps } from './LogState';

export default (state: LogStateProps, action: LogActionTypes) => {
  switch (action.type) {
    case GET_LOGS: {
      return { ...state, logs: action.payload, loading: false };
    }
    default: {
      return state;
    }
  }
};
