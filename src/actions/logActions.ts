import { Dispatch, AnyAction, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import ActionsModel from './types';

export const getLogs: ActionCreator<ThunkAction<
  {},
  {},
  {},
  AnyAction
>> = () => async (dispatch: Dispatch<ActionsModel>) => {
  try {
    dispatch(setLoading());

    dispatch({
      type: 'SET_LOADING',
    });

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

export const setLoading = (): ActionsModel => {
  return {
    type: 'SET_LOADING',
  };
};
