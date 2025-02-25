import React from 'react';
import { Link } from 'react-scroll';



const Navbar = () => {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#00008B' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Sajith Eranda</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="home" smooth={true} duration={500} className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="about" smooth={true} duration={500} className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="projects" smooth={true} duration={500} className="nav-link">Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="skills" smooth={true} duration={500} className="nav-link">Skills</Link>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;