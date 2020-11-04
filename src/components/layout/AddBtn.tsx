import React, { useEffect, useRef } from 'react';

const AddBtn: React.FC = () => {
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    M.FloatingActionButton.init(btnRef.current!);
  }, []);

  return (
    <div className="fixed-action-btn" ref={btnRef}>
      <a
        href="#log-modal"
        className="btn-floating btn-large blue darken-2 modal-trigger"
      >
        <i className="large material-icons">add</i>
      </a>
      <ul>
        <li>
          <a
            href="#tech-list-modal"
            className="btn-floating green modal-trigger"
          >
            <i className="material-icons">person</i>
          </a>
        </li>
        <li>
          <a href="#add-tech-modal" className="btn-floating red modal-trigger">
            <i className="material-icons">person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
