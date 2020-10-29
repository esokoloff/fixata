import React, { useReducer } from 'react';
import LogContext, { LogContextProps } from './logContext';
import LogModel from '../models/LogModel';
import logReducer from './logReducer';
import { GET_LOGS, LOGS_ERROR } from './types';
import { ADD_LOG } from './types';

export interface LogStateProps {
  logs: LogModel[];
  loading: Boolean;
  error: string;
}

const initialState: LogStateProps = {
  logs: [],
  loading: true,
  error: '',
};

const LogState = (props: any) => {
  const [state, dispatch] = useReducer(logReducer, initialState);

  const getLogs = async () => {
    try {
      const res = await fetch('/logs');
      const data = await res.json();

      dispatch({ type: GET_LOGS, payload: data });
    } catch (err) {
      dispatch({ type: LOGS_ERROR, payload: err.response.data });
    }
  };

  const addLog = async (log: LogModel) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(log),
    };

    try {
      const res = await fetch('/logs', options);
      const data = await res.json();

      dispatch({
        type: ADD_LOG,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.data,
      });
    }
  };

  const contextPropsValues: LogContextProps = {
    ...state,
    getLogs,
    addLog,
  };

  return (
    <LogContext.Provider value={contextPropsValues}>
      {props.children}
    </LogContext.Provider>
  );
};

export default LogState;
