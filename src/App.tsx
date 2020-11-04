import React, { Fragment } from 'react';
import Logs from './components/logs/Logs';
import SearchBar from './components/layout/SearchBar';
import AddBtn from './components/layout/AddBtn';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

import 'materialize-css/dist/css/materialize.min.css';
import LogState from './context/log/LogState';
import TechState from './context/tech/TechState';
import LogModal from './components/logs/LogModal';

const App: React.FC = () => {
  return (
    <LogState>
      <TechState>
        <Fragment>
          <SearchBar />
          <div className="container">
            <AddBtn />
            <LogModal />
            <AddTechModal />
            <TechListModal />
            <Logs />
          </div>
        </Fragment>
      </TechState>
    </LogState>
  );
};

export default App;
