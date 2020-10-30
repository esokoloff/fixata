import React, { useReducer } from 'react';
import LogContext from './logContext';
import LogModel from '../../models/LogModel';
import logReducer from './logReducer';
import { DELETE_LOG, GET_LOGS, LOGS_ERROR } from '../types';
import { ADD_LOG } from '../types';

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
      const res = await fetch('/logs?_sort=id&_order=desc');
      const data = await res.json();
      console.log(data);
      dispatch({ type: GET_LOGS, payload: data });
    } catch (err) {
      dispatch({ type: LOGS_ERROR, payload: err.response.data });
    }
  };

  const addLog = async (log: LogModel) => {
    log.date = new Date().toString();

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

  const deleteLog = async (id: number) => {
    const options = {
      method: 'DELETE',
    };

    try {
      await fetch(`/logs/${id}`, options);

      dispatch({
        type: DELETE_LOG,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.data,
      });
    }
  };

  return (
    <LogContext.Provider value={{ ...state, getLogs, addLog, deleteLog }}>
      {props.children}
    </LogContext.Provider>
  );
};

export default LogState;
