import React, { useContext, useEffect, useRef, useState } from 'react';
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

const LogModal: React.FC = () => {
  const {
    addLog,
    updateLog,
    current: { message: isEditMode },
    current,
    clearCurrent,
  } = useContext(logContext);
  const { techs } = useContext(techContext);
  const [log, setLog] = useState(defaultLogState);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    M.Modal.init(modalRef.current!, {
      onCloseEnd: () => {
        clearCurrent();
        setLog(defaultLogState);
      },
    });
  }, []);

  useEffect(() => {
    if (isEditMode) {
      setLog(current);
    }
  }, [isEditMode, current]);

  const onChange = (e: React.ChangeEvent<PropsChangeElement>) => {
    const { name, value } = e.target;

    setLog((prevLog) => ({
      ...prevLog,
      [name]: name === 'attention' ? !prevLog.attention : value,
    }));
  };

  const onSubmit = () => {
    console.log(log);
    if (log.message === '' || !log.techsId) {
      M.toast({ html: 'Please, enter a messege and tech' });
    } else {
      if (isEditMode) {
        updateLog(log);
        M.toast({ html: 'Log updated successfully' });
      } else {
        addLog(log);
        M.toast({ html: 'Log added successfully' });
      }
      setLog(defaultLogState);
    }
  };

  return (
    <div id="log-modal" ref={modalRef} className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>{isEditMode ? 'Edit System Log' : 'Enter System Log'}</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={log.message}
              onChange={onChange}
            />
            {!isEditMode && (
              <label htmlFor="message" className="active">
                Log Message
              </label>
            )}
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
          {isEditMode ? 'Edit' : 'Enter'}
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '60%',
  height: '60%',
};

export default LogModal;
