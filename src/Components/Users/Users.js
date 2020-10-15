import React from 'react';
import Useritem from './Useritem';
import propTypes from 'prop-types';
import Spinner from '../Layouts/Spinner';

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid">
        {users.map((user) => (
          <Useritem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  users: propTypes.array.isRequired,
  loading: propTypes.bool.isRequired,
};

Useritem.propTypes = {
  user: propTypes.object.isRequired,
};

export default Users;
