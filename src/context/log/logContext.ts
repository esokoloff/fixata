import React from 'react';
import LogModel from '../../models/LogModel';
import { LogStateProps } from './LogState';

interface LogContextProps extends LogStateProps {
  getLogs: () => Promise<void>;
  addLog: (log: LogModel) => Promise<void>;
  updateLog: (log: LogModel) => Promise<void>;
  deleteLog: (id: number) => Promise<void>;
  setCurrent: (log: LogModel) => void;
  clearCurrent: () => void;
  setFilter: (value: string) => void;
  clearFilter: () => void;
}

const logContext = React.createContext({} as LogContextProps);

export default logContext;
