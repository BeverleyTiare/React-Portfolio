import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header" style={{ background: 'black', padding: 20 }}>
      <nav className="navbar">
        <ul className="navbar__links" style={{ listStyleType: 'none', padding: 20 }}>
          <li>
            <NavLink
              to="/"
              exact
              activeClassName="active"
              style={{ textDecoration: 'none', fontSize: '14px' }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeClassName="active"
              style={{ textDecoration: 'none', fontSize: '14px' }}
            >
              About
            </NavLink>
          </li>
          <li>
            <a
              target="_blank"
              href="/pdfs/BT-Resume.pdf"
              activeClassName="active"
              style={{ textDecoration: 'none', fontSize: '14px' }}
            >
              Resume
            </a>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              activeClassName="active"
              style={{ textDecoration: 'none', fontSize: '14px' }}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeClassName="active"
              style={{ textDecoration: 'none', fontSize: '14px' }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
