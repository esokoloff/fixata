import { Dispatch, AnyAction, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import ActionsModel from './types';
import LogModel from '../models/LogModel';

export const getLogs: ActionCreator<ThunkAction<
  {},
  {},
  {},
  AnyAction
>> = () => async (dispatch: Dispatch<ActionsModel>) => {
  try {
    dispatch(setLoading());

    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: 'GET_LOGS',
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: 'LOGS_ERROR',
      payload: err.response.data,
    });
  }
};

export const addLog = (log: LogModel) => async (
  dispatch: Dispatch<ActionsModel>
) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(log),
  };

  try {
    dispatch(setLoading());

    const res = await fetch('/logs', options);
    const data = await res.json();

    dispatch({
      type: 'ADD_LOG',
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: 'LOGS_ERROR',
      payload: err.response.data,
    });
  }
};

export const setLoading = (): ActionsModel => {
  return {
    type: 'SET_LOADING',
  };
};
