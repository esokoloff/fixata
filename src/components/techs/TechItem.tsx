import React from 'react';
import TechModel from '../../models/TechModel';

const TechItem: React.FC<{ tech: TechModel }> = ({ tech }) => {
  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default TechItem;
