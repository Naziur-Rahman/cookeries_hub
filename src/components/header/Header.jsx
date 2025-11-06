import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><Link to="/Home">Home</Link></li>
            <li>
              <span>Kitchen & Cooking</span>
              <ul className="p-2">
                <li><Link to="Dinner_Ware">Dinner Ware</Link></li>
                <li><Link to="Drink_Ware">Drink Ware</Link></li>
                <li><Link to="Bake_Ware">Bake Ware</Link></li>
                <li><Link to="Storage_&_Container">Storage & Containers</Link></li>
                <li><Link to="Table_Accessories">Table Accessories</Link></li>
                <li><Link to="Pans_&_Pots">Pans & Pots</Link></li>
                <li><Link to="Pressure_cookers_&_Steamrs">Pressure Cookers & Steamers</Link></li>
                <li><Link to="Tawa_&_Griddles">Tawa & Griddles</Link></li>
              </ul>
            </li>
            <li><Link to="#">About Us</Link></li>
            <li><Link to="#">Contact Us</Link></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">Cookeries Hub</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/Home">Home</Link></li>
          <li>
            <details>
              <summary>Kitchen & Cooking</summary>
              <ul className="p-2">
                <li><Link to="Dinner_Ware">Dinner Ware</Link></li>
                <li><Link to="Drink_Ware">Drink Ware</Link></li>
                <li><Link to="Bake_Ware">Bake Ware</Link></li>
                <li><Link to="Storage_&_Container">Storage & Containers</Link></li>
                <li><Link to="Table_Accessories">Table Accessories</Link></li>
                <li><Link to="Pans_&_Pots">Pans & Pots</Link></li>
                <li><Link to="Pressure_cookers_&_Steamrs">Pressure Cookers & Steamers</Link></li>
                <li><Link to="Tawa_&_Griddles">Tawa & Griddles</Link></li>
              </ul>
            </details>
          </li>
          <li><Link to="About_Us">About Us</Link></li>
          <li><Link to="Contact_Us">Contact Us</Link></li>
        </ul>
      </div>

      <div className="navbar-end">
        <Link to="/login" className="btn">LogIn</Link>
      </div>
    </div>
  );
};

export default Header;
