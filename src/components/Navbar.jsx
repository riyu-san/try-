import React, { useState } from 'react';
import '../styles/Navbar.css';
import Logo from '../assets/bakery-business.jpg'
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? 'open' : 'close'}>
        <NavLink to='/'>
            <img src={Logo} alt="Logo" />
        </NavLink>
        <div className='hiddenLinks'>
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
  )
}

export default Navbar
