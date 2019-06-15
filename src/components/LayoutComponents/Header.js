import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="mb-4 p-2 bg-dark text-center">
      <h1 className="font-weight-bold">React Todo App</h1>
      <Link className="text-light pr-2" to="/">
        Home
      </Link>
      {' | '}
      <Link className="text-light pl-2" to="/about">
        About
      </Link>
      {/* <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active text-light" to="/">
            Home
          </Link> 
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-light" to="/about">
            About
          </Link> 
        </li>
      </ul> */}
    </header>
  );
}

export default Header;
