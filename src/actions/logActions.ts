import { Dispatch } from "redux";

export const getLogs = () => async (dispatch: Dispatch) => {
  try {
    setLoading();
    console.log('test');

    const res = await fetch('/logs');
    const data = await res.json();
    dispatch({
      type: 'GET_LOGS',
      payload: data
    });
  } catch (err) {
    dispatch({
      type: 'LOGS_ERROR',
      payload: err.response.data
    });
  }
};

export const setLoading = () => {
  return {
    type: 'SET_LOADING'
  };
};
