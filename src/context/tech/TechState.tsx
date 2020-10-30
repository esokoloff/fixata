import React, { useReducer } from 'react';
import TechModel from '../../models/TechModel';
import { ADD_TECH, GET_TECHS, TECHS_ERROR } from '../types';
import TechContext from './techContext';
import techReducer from './techReducer';

export interface TechStateProps {
  techs: TechModel[];
  loading: Boolean;
  error: string;
}

const initialState: TechStateProps = {
  techs: [],
  loading: true,
  error: '',
};

const TechState = (props: any) => {
  const [state, dispatch] = useReducer(techReducer, initialState);

  const getTechs = async () => {
    try {
      const res = await fetch('/techs');
      const data = await res.json();

      dispatch({
        type: GET_TECHS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.data,
      });
    }
  };

  const addTech = async (tech: TechModel) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tech),
    };

    try {
      const res = await fetch('/techs', options);
      const data = await res.json();

      dispatch({
        type: ADD_TECH,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.data,
      });
    }
  };

  return (
    <TechContext.Provider value={{ ...state, getTechs, addTech }}>
      {props.children}
    </TechContext.Provider>
  );
};

export default TechState;
