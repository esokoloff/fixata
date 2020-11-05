import React, { useContext, useEffect, useState } from 'react';
import Moment from 'react-moment';
import logContext from '../../context/log/logContext';
import techContext from '../../context/tech/techContext';
import LogModel from '../../models/LogModel';

const LogItem: React.FC<{ log: LogModel }> = ({ log }) => {
  const { deleteLog, setCurrent } = useContext(logContext);
  const { techs } = useContext(techContext);
  const [techName, setTechName] = useState(' ');

  useEffect(() => {
    const tech = techs.find((tech) => tech.id === parseInt(log.techsId));

    if (tech) {
      setTechName(` ${tech.firstName} ${tech.lastName} `);
    }
  }, [log.techsId, techs]);

  const onDelete = () => {
    deleteLog(log.id!);

    M.toast({ html: 'Log deleted successfully' });
  };

  return (
    <li className="collection-item">
      <div>
        <a
          onClick={() => setCurrent(log)}
          href="#log-modal"
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span> last updated by
          <span className="black-text">{techName}</span>
          on <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default LogItem;
