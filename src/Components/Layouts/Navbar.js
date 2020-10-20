import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className={icon}></i> {title}{' '}
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  icon: propTypes.string.isRequired,
};

export default Navbar;
