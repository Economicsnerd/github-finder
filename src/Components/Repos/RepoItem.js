import React from 'react';
import PropTypes from 'prop-types';

export const RepoItem = ({ repo }) => {
  return (
    <div className="dark-card">
      <h3>
        <i class="fas fa-code-branch" style={{ marginRight: 10 }}></i>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
};

RepoItem.PropTypes = {
  repo: PropTypes.object.isRequired,
};
export default RepoItem;
