import React from 'react';
import logo from '../../images/logo.svg';
import './Nav.scss';

function Nav() {
  return (
    <div className="Nav">
      {/* <img src={logo} alt=""/> */}
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Link 1</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
