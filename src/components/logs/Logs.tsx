import React, { useContext, useEffect, useState } from 'react';
import LogContext from '../../context/log/logContext';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import LogModel from '../../models/LogModel';

const Logs: React.FC = () => {
  const { logs, loading, getLogs, filterValue } = useContext(LogContext);
  const [filteredLogs, setFilteredLogs] = useState<LogModel[]>([]);

  useEffect(() => {
    getLogs();
  }, []);

  useEffect(() => {
    if (filterValue) {
      setFilteredLogs(
        logs.filter((log) => {
          return log.message
            .replace(/\s/g, '')
            .toLowerCase()
            .includes(filterValue.replace(/\s/g, '').toLowerCase());
        })
      );
    }
  }, [filterValue, logs]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {logs.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : filterValue ? (
        filteredLogs.map((log) => <LogItem log={log} key={log.id} />)
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

export default Logs;
