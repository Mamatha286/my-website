import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Mamatha H</div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/projects" onClick={closeMenu}>Projects</Link>
        <Link to="/achievements" onClick={closeMenu}>Achievements</Link>
        <Link to="/certifications" onClick={closeMenu}>Certifications</Link>
        <Link to="/hobbies" onClick={closeMenu}>Hobbies</Link>           {/* ✅ NEW */}
        <Link to="/gallery" onClick={closeMenu}>Gallery</Link>           {/* ✅ NEW */}
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
