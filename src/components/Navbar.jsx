import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import Logo from '../assets/bakery-business.jpg';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  useEffect(() => {
    // Close the menu when the route changes
    setOpenLinks(false);
  }, [location]);

  return (
    <div className='navbar'>
      <div className={`overlay ${openLinks ? 'active' : ''}`} onClick={toggleNavbar}></div>
      <div className='leftSide'>
        <NavLink to='/'>
          <img src={Logo} alt="Logo" />
        </NavLink>
        <div className={`hiddenLinks ${openLinks ? 'open' : ''}`}>
          <NavLink to='/' exact activeClassName='active'>Home</NavLink>
          <NavLink to='/menu' activeClassName='active'>Menu</NavLink>
          <NavLink to='/about' activeClassName='active'>About</NavLink>
          <NavLink to='/contact' activeClassName='active'>Contact</NavLink>
        </div>
      </div>
      <div className='rightSide'>
        <NavLink to='/' exact activeClassName='active'>Home</NavLink>
        <NavLink to='/menu' activeClassName='active'>Menu</NavLink>
        <NavLink to='/about' activeClassName='active'>About</NavLink>
        <NavLink to='/contact' activeClassName='active'>Contact</NavLink>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
