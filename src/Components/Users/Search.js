import React, { useState, useContext } from 'react';
import GithubContext from '../../Context/Github/GithubContext';
import AlertContext from '../../Context/Alert/AlertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    if (text === '') {
      alertContext.setAlert('You need to type something!', 'danger');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  const onChange = (event) => setText(event.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Lookup Github Users ..."
          value={text}
          onChange={onChange}
        />
        <span>
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </span>
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-danger btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
          <i class="fas fa-undo-alt" style={{ marginLeft: 10 }}></i>
        </button>
      )}
    </div>
  );
};

export default Search;
