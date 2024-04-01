import React from 'react';
import { Link } from 'react-router-dom';
import LogoSVG from '../images/LogoSVG';
import Wordmark from '../images/Wordmark';

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 left-0 bg-off-white p-4 flex justify-between items-center" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '40px', marginTop: '20px' }}>
      <LogoSVG></LogoSVG>
      <Link to="/create" className='font-gothic text-brand-blue-dark text-sm' style={{textDecoration: 'none', marginLeft: '10px'}}>
        <Wordmark></Wordmark>
      </Link>
    </div>
  </div>
  );
};

export default Navbar;
