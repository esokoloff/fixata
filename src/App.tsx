import React, { useEffect, Fragment } from 'react';
import Logs from './components/logs/Logs';
import SearchBar from './components/layout/SearchBar';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import LogState from './context/log/LogState';
import TechState from './context/tech/TechState';

const App: React.FC = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <LogState>
      <TechState>
        <Fragment>
          <SearchBar />
          <div className="container">
            <AddBtn />
            <AddLogModal />
            <EditLogModal />
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
