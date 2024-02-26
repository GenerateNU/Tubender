import React from 'react';
import GrayBoxImage from '../images/box';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 left-0 bg-off-white p-4 flex justify-between items-center" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '40px', marginTop: '20px' }}>
      <GrayBoxImage/>
      <Link to="/create" style={{ fontSize: '14px', textDecoration: 'none', marginLeft: '10px', color: 'inherit' }}>
        tubender
      </Link>
    </div>
  </div>
  );
};

export default Navbar;
