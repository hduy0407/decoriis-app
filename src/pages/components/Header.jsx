import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'; // Import routing components
import '../../styles/Header.css';
import logo from '../../assets/Logo.png';
import ClearIcon from '@mui/icons-material/Clear';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define your navigation items with paths
  const navItems = [
    { title: 'GIỚI THIỆU', path: '/about' },
    { title: 'THIẾT KẾ', path: '/design' },
    { title: 'NHÀ XƯỞNG', path: '/factory' },
    { title: 'PORTFOLIO', path: '/portfolio' },
    { title: 'LIÊN HỆ', path: '/contact' },
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("show-mobile-menu");
    } else {
      document.body.classList.remove("show-mobile-menu");
    }
    
    return () => {
      document.body.classList.remove("show-mobile-menu");
    };
  }, [isMenuOpen]);

  const handleNavLinkClick = () => {
    handleMenuClose();
  };

  return (
    <header className="header">
      <nav className="navbar">
        {/* Use Link for the logo */}
        <Link className="logo" to="/" onClick={handleMenuClose}>
          <img src={logo} alt="logo" />
        </Link>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <button 
            id='menu-close-button' 
            className='close-button' 
            onClick={handleMenuClose}
            aria-label="Close menu"
          >
            <ClearIcon />
          </button>
          
          {/* Use NavLink for navigation items */}
          {navItems.map((item) => (
            <li key={item.title} className="nav-item">
              <NavLink 
                to={item.path}
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }
                onClick={handleNavLinkClick}
              >
                {item.title}
              </NavLink> 
            </li>
          ))}
        </ul>
        <button 
          id='menu-open-button' 
          className='open-bars' 
          onClick={handleMenuToggle}
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
        > 
          <MenuIcon />
        </button>
      </nav>
    </header>
  );
};

export default Header;