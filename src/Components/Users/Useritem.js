import React from 'react';

const Useritem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="dark-card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <a href={html_url} className="btn btn-dark">
        See on Github
      </a>
    </div>
  );
};

export default Useritem;
