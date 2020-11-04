import {
  ADD_LOG,
  CLEAR_CURRENT_LOG,
  DELETE_LOG,
  GET_LOGS,
  LogActionTypes,
  SET_CURRENT_LOG,
  UPDATE_LOG,
} from '../types';
import { defaultLogState, LogStateProps } from './LogState';

export default (state: LogStateProps, action: LogActionTypes) => {
  switch (action.type) {
    case GET_LOGS: {
      return { ...state, logs: action.payload, loading: false };
    }
    case ADD_LOG: {
      return { ...state, logs: [action.payload, ...state.logs] };
    }
    case UPDATE_LOG: {
      return {
        ...state,
        logs: state.logs.map((log) =>
          log.id === action.payload.id ? action.payload : log
        ),
      };
    }
    case DELETE_LOG: {
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
      };
    }
    case SET_CURRENT_LOG: {
      return {
        ...state,
        current: action.payload,
      };
    }
    case CLEAR_CURRENT_LOG: {
      return {
        ...state,
        current: defaultLogState,
      };
    }
    default: {
      return state;
    }
  }
};
