import React from 'react';
import LogModel from '../../models/LogModel';
import { LogStateProps } from './LogState';

interface LogContextProps extends LogStateProps {
  getLogs: () => Promise<void>;
  addLog: (log: LogModel) => Promise<void>;
  deleteLog: (id: number) => Promise<void>;
}

const logContext = React.createContext({} as LogContextProps);

export default logContext;
