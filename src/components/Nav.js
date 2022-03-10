import React from 'react';
import logo from './images/resume-logo.png';

function Nav() {
  return (
    <div>
      <nav className="navigation">
        <div id="logo-holder">
          <img id="logo" src={logo} alt="resume builder logo"></img>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
