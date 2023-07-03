import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import Footer from './Footer';

const Header = () => {
  const renderPage = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />//not showing on nav
      </Routes>
    );
  };

  return (
    <>
      <header className="header" style={{ background: 'black', color: 'grey', padding: 20 }}>
        <nav className="navbar">
          <Link className="navbar__logo" to="/">
            Logo
          </Link>
          <ul className="navbar__links" style={{ listStyleType: 'none', padding: 20 }}>
          <li>
            <NavLink
              to="/"
              exact
              activeClassName="active"
              style={{ textDecoration: 'none', color: 'grey' }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeClassName="active"
              style={{ textDecoration: 'none', color: 'grey' }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              activeClassName="active"
              style={{ textDecoration: 'none', color: 'grey' }}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeClassName="active"
              style={{ textDecoration: 'none', color: 'grey' }}
            >
              Contact
            </NavLink>
          </li>
        </ul>      
      </nav>
    </header>

      <main>{renderPage()}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Header;



/*import React from 'react';
import { Link } from "react-router-dom";
//import { Navigation } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import Footer from './Footer';



const Header = () => {
  //const [isOpen, setIsOpen] = useState(false);

  //const toggleNav = () => setIsOpen(!isOpen);

  const renderPage = () => {
    switch (window.location.pathname) {
      case "/about":
        return <About />;
      case "/contact":
        return <Contact />;
      case "/Portfolio":
        return <Portfolio />;
      case "/resume":
        return <Resume />;
      default:
        return <Home />;

    }
  };

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <a className="navbar__logo" href="/">Logo</a>
          <ul className="navbar__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      
      <main>
        {renderPage()}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}


  
export default Header;*/
