import React, { useContext } from 'react';
import logContext from '../../context/log/logContext';
import M from 'materialize-css';
import TechModel from '../../models/TechModel';
import techContext from '../../context/tech/techContext';

const TechItem: React.FC<{ tech: TechModel }> = ({ tech }) => {
  const { logs } = useContext(logContext);
  const { deleteTech } = useContext(techContext);

  const onDelete = () => {
    if (logs.some((log) => parseInt(log.techsId) === tech.id)) {
      M.toast({ html: 'Cannot delete tech that is in use' });
    } else {
      deleteTech(tech.id!);
      M.toast({ html: 'Tech deleted successfully' });
    }
  };

  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default TechItem;
