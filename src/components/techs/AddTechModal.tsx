import React, { useContext, useState } from 'react';
import M from 'materialize-css';
import techContext from '../../context/tech/techContext';
import TechModel from '../../models/TechModel';

const defaultTechState: TechModel = {
  firstName: '',
  lastName: '',
};

const AddTechModal: React.FC = () => {
  const { addTech } = useContext(techContext);
  const [tech, setTech] = useState(defaultTechState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setTech((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = () => {
    if (tech.firstName === '' || tech.lastName === '') {
      M.toast({ html: 'Please, enter first and last name' });
    } else {
      addTech(tech);
      setTech(defaultTechState);
      M.toast({ html: 'Technician added successfully' });
    }
  };
  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={tech.firstName}
              onChange={onChange}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={tech.lastName}
              onChange={onChange}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
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

export default AddTechModal;
