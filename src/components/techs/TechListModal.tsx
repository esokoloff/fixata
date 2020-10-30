import React, { useEffect, useContext, Fragment } from 'react';
import techContext from '../../context/tech/techContext';
import TechItem from './TechItem';

const TechListModal: React.FC = () => {
  const { techs, getTechs, loading } = useContext(techContext);

  useEffect(() => {
    getTechs();
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        {!loading && !techs.length ? (
          <h5 style={{ textAlign: 'center' }}>No technicians added</h5>
        ) : (
          <Fragment>
            <h4>Technician List</h4>
            <ul className="collection">
              {techs.map((tech) => (
                <TechItem tech={tech} key={tech.id!} />
              ))}
            </ul>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default TechListModal;
