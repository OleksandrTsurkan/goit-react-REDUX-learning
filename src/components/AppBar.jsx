import React from 'react';
import { Link } from 'react-router-dom';

const AppBar = () => {
  return (
    <header>
      {' '}
      <nav>
        <Link to="/login">Log in</Link>
      </nav>
    </header>
  );
};

export default AppBar;
