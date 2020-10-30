import LogModel from '../models/LogModel';
import TechModel from '../models/TechModel';

export const GET_LOGS = 'GET_LOGS';
export const ADD_LOG = 'ADD_LOG';
export const DELETE_LOG = 'DELETE_LOG';
export const SET_CURRENT = 'SET_CURRENT';
export const CLEAR_CURRENT = 'CLEAR_CURRENT';
export const UPDATE_LOG = 'UPDATE_LOG';
export const CLEAR_LOGS = 'CLEAR_LOGS';
export const SET_LOADING = 'SET_LOADING';
export const LOGS_ERROR = 'LOGS_ERROR';
export const CLEAR_LOGS_ERROR = 'CLEAR_LOGS_ERROR';
export const SEARCH_LOGS = 'SEARCH_LOGS';
export const GET_TECHS = 'GET_TECHS';
export const ADD_TECH = 'ADD_TECH';
export const DELETE_TECH = 'DELETE_TECH';
export const TECHS_ERROR = 'TECHS_ERROR';

interface GetLogsAction {
  type: typeof GET_LOGS;
  payload: LogModel[];
}

interface AddLogAction {
  type: typeof ADD_LOG;
  payload: LogModel;
}

interface DeleteLogAction {
  type: typeof DELETE_LOG;
  payload: number;
}

interface SetCurrentAction {
  type: typeof SET_CURRENT;
  payload: LogModel;
}

interface ClearCurrentAction {
  type: typeof CLEAR_CURRENT;
}

interface SetLogErrorActon {
  type: typeof LOGS_ERROR;
  payload: string;
}

interface ClearLogErrorAction {
  type: typeof CLEAR_LOGS_ERROR;
}

interface GetTechsAction {
  type: typeof GET_TECHS;
  payload: TechModel[];
}

interface AddTechAction {
  type: typeof ADD_TECH;
  payload: TechModel;
}

interface SetTechErrorAction {
  type: typeof TECHS_ERROR;
  payload: string;
}

export type LogActionTypes =
  | GetLogsAction
  | AddLogAction
  | DeleteLogAction
  | SetCurrentAction
  | ClearCurrentAction
  | SetLogErrorActon
  | ClearLogErrorAction;

export type TechActionTypes =
  | GetTechsAction
  | AddTechAction
  | SetTechErrorAction;
