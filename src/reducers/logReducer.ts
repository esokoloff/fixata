import LogModel from '../models/LogModel';
import ActionsModel from '../actions/types';
import Logs from '../components/logs/Logs';

export interface LogStateModel {
  logs: LogModel[];
  current: LogModel;
  loading: boolean;
  error: string;
}

const initialState: LogStateModel = {
  logs: [],
  current: {
    id: '0',
    message: '',
    attention: false,
    date: '',
    tech: '',
  },
  loading: false,
  error: '',
};

export default (state = initialState, action: ActionsModel): LogStateModel => {
  switch (action.type) {
    case 'GET_LOGS':
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_LOG':
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      };
    case 'LOGS_ERROR':
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
