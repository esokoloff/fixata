import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import { LogStateModel } from '../../reducers/logReducer';
import { AppState } from '../../reducers';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction, Dispatch } from 'redux';
import { getLogs } from '../../actions/logActions';

interface OwnProps {}

interface StateProps {
  log: LogStateModel;
}

interface DispatchProps {
  getLogs: () => (dispatch: Dispatch) => Promise<void>;
}

type Props = OwnProps & StateProps;

const Logs: React.FC<Props> = ({ log: {logs, loading } }) => {
  useEffect(() => {
    getLogs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : (
        logs.map(log => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

const mapStateToProps = (state: AppState): StateProps => {
  return {
    log: state.log
  };
};

// const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>
// ): DispatchProps => {
//   return {
//     getLogs: () => dispatch(getLogs)
//   };
// };

export default connect<StateProps, {}, OwnProps, AppState>(
  mapStateToProps
)(Logs);
