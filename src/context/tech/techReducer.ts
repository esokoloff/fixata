import { TechStateProps } from './TechState';
import { ADD_TECH, GET_TECHS, TechActionTypes } from '../types';

export default (state: TechStateProps, action: TechActionTypes) => {
  switch (action.type) {
    case GET_TECHS:
      return { ...state, techs: action.payload, loading: false };
    case ADD_TECH:
      return { ...state, techs: [action.payload, ...state.techs] };
    default:
      return state;
  }
};
