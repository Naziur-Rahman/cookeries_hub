import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'text-primary font-semibold' : '';
  };

  const handleLogout = () => {
  // Clear user data from context/state
  // Redirect to logout page
  navigate('/logout');
};

  return (
    <div className="navbar bg-base-100 shadow-lg sticky top-0 z-40">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
            <li><Link to="/home" className={isActive('/home')}>Home</Link></li>
            <li>
              <details>
                <summary>Kitchen & Cooking</summary>
                <ul className="p-2">
                  <li><Link to="/dinner-ware">Dinner Ware</Link></li>
                  <li><Link to="/drink-ware">Drink Ware</Link></li>
                  <li><Link to="/bake-ware">Bake Ware</Link></li>
                  <li><Link to="/storage-containers">Storage & Containers</Link></li>
                  <li><Link to="/table-accessories">Table Accessories</Link></li>
                  <li><Link to="/pans-pots">Pans & Pots</Link></li>
                  <li><Link to="/pressure-cookers">Pressure Cookers & Steamers</Link></li>
                  <li><Link to="/tawa-griddles">Tawa & Griddles</Link></li>
                </ul>
              </details>
            </li>
            <li><Link to="/about-us" className={isActive('/about-us')}>About Us</Link></li>
            <li><Link to="/contact-us" className={isActive('/contact-us')}>Contact Us</Link></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl text-primary font-bold">Cookeries Hub</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/home" className={isActive('/home')}>Home</Link></li>
          <li>
            <details>
              <summary>Kitchen & Cooking</summary>
              <ul className="p-2 bg-base-100">
                <li><Link to="/dinner-ware">Dinner Ware</Link></li>
                <li><Link to="/drink-ware">Drink Ware</Link></li>
                <li><Link to="/bake-ware">Bake Ware</Link></li>
                <li><Link to="/storage-containers">Storage & Containers</Link></li>
                <li><Link to="/table-accessories">Table Accessories</Link></li>
                <li><Link to="/pans-pots">Pans & Pots</Link></li>
                <li><Link to="/pressure-cookers">Pressure Cookers & Steamers</Link></li>
                <li><Link to="/tawa-griddles">Tawa & Griddles</Link></li>
              </ul>
            </details>
          </li>
          <li><Link to="/about-us" className={isActive('/about-us')}>About Us</Link></li>
          <li><Link to="/contact-us" className={isActive('/contact-us')}>Contact Us</Link></li>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        {/* Shopping Cart */}
        <Link to="/cart" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item">0</span>
          </div>
        </Link>
        
        <Link to="/login" className="btn btn-primary">Login</Link>
      </div>
    </div>
  );
};

export default Header;