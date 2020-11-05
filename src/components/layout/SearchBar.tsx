import React, { useContext } from 'react';
import logContext from '../../context/log/logContext';

const SearchBar: React.FC = () => {
  const { setFilter, clearFilter } = useContext(logContext);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value) {
      setFilter(value);
    } else {
      clearFilter();
    }
  };

  return (
    <nav style={{ marginBottom: '30px' }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              type="search"
              id="search"
              placeholder="Search Logs..."
              onChange={handleInputChange}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
