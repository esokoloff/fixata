import React, { useContext, useEffect } from 'react';
import LogContext from '../../context/log/logContext';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';

const Logs: React.FC = () => {
  const { logs, loading, getLogs } = useContext(LogContext);

  useEffect(() => {
    getLogs();
  }, []);

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
      ) : (
        logs.map((log) => <LogItem log={log} />)
      )}
    </ul>
  );
};

export default Logs;
