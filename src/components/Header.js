import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <a className="navbar__logo" href="/">Logo</a>
        <ul className="navbar__links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
