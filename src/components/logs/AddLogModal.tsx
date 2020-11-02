import React, { useContext, useState } from 'react';
import M from 'materialize-css';
import LogModel from '../../models/LogModel';
import logContext from '../../context/log/logContext';
import techContext from '../../context/tech/techContext';

const defaultLogState: LogModel = {
  message: '',
  attention: false,
  date: '',
  techsId: '',
};

type PropsChangeElement = HTMLInputElement | HTMLSelectElement;

const AddLogModal: React.FC = () => {
  const { addLog } = useContext(logContext);
  const { techs } = useContext(techContext);
  const [log, setLog] = useState(defaultLogState);

  const onChange = (e: React.ChangeEvent<PropsChangeElement>) => {
    const { name, value } = e.target;

    setLog((prevLog) => ({
      ...prevLog,
      [name]: name === 'attention' ? !prevLog.attention : value,
    }));
  };

  const onSubmit = () => {
    if (log.message === '' || !log.techsId) {
      M.toast({ html: 'Please, enter a messege and tech' });
    } else {
      addLog(log);
      setLog(defaultLogState);
      M.toast({ html: 'Log added successfully' });
    }
  };

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={log.message}
              onChange={onChange}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="techsId"
              className="browser-default"
              value={log.techsId}
              onChange={onChange}
            >
              <option value="" disabled selected>
                Select Technician
              </option>
              {!techs.length ? (
                <option value="" disabled>
                  No technicians available
                </option>
              ) : (
                techs.map((tech) => (
                  <option value={tech.id} key={tech.id}>
                    {tech.firstName} {tech.lastName}
                  </option>
                ))
              )}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  name="attention"
                  className="filled-in"
                  checked={log.attention}
                  value={log.attention ? 'true' : 'false'}
                  onChange={onChange}
                />
                <span>Needs attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-green btn blue"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '60%',
  height: '60%',
};

export default AddLogModal;
