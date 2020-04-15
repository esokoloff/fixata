import React, { useState } from 'react';
import M from 'materialize-css';
import LogModel from '../../models/LogModel';
import { connect } from 'react-redux';
import { AppState } from '../../reducers';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { addLog } from '../../actions/logActions';
import { addListener } from 'process';

interface DispatchProps {
  addLog: (log: LogModel) => void;
}

type Props = DispatchProps;

const defaultLogState: LogModel = {
  id: '',
  message: '',
  attention: false,
  date: '',
  tech: '',
};

type PropsChangeElement = HTMLInputElement | HTMLSelectElement;

const AddLogModal: React.FC<Props> = ({ addLog }) => {
  const [log, setLog] = useState(defaultLogState);

  const onChange = (e: React.ChangeEvent<PropsChangeElement>) => {
    e.persist();
    setLog((prevLog) => ({
      ...prevLog,
      [e.target.name]:
        e.target.name === 'attention' ? !prevLog.attention : e.target.value,
    }));
  };

  const onSubmit = () => {
    if (log.message === '' || log.tech === '') {
      M.toast({ html: 'Please, enter a message and tech' });
    } else {
      console.log(log);

      addLog(log);

      // Reset log state
      setLog(defaultLogState);
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
              name="tech"
              value={log.tech}
              className="browser-default"
              onChange={onChange}
            >
              <option value="" disabled>
                Select Technitian
              </option>
              <option value="John Doe">John Doe</option>
              <option value="Sam Smith">Sam Smith</option>
              <option value="Sara Wilson">Sara Wilson</option>
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

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
): DispatchProps => {
  return {
    addLog: (log: LogModel) => dispatch(addLog(log)),
  };
};

const modalStyle = {
  width: '75%',
  height: '75%',
};

export default connect<{}, DispatchProps, {}, AppState>(
  null,
  mapDispatchToProps
)(AddLogModal);
