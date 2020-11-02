import React from 'react';
import TechModel from '../../models/TechModel';
import { TechStateProps } from './TechState';

export interface TechContextProps extends TechStateProps {
  getTechs: () => Promise<void>;
  addTech: (tech: TechModel) => Promise<void>;
  deleteTech: (techId: number) => Promise<void>;
}

const techContext = React.createContext({} as TechContextProps);

export default techContext;
