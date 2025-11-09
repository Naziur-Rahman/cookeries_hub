import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCookwareOpen, setIsCookwareOpen] = useState(false);
  const [isKitchenOpen, setIsKitchenOpen] = useState(false);

  // Mock user authentication state - replace with your actual auth logic
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user] = useState({ name: "John Doe" });

  const isActive = (path) => {
    return location.pathname === path ? 'text-primary font-semibold bg-primary/10' : 'text-gray-700 hover:text-primary';
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Clear user data from context/state
    // Add your logout logic here
    navigate('/');
  };

  const cookwareCategories = [
    {
      name: "Clay Cookware",
      path: "/clay-cookware",
      description: "Traditional clay-made utensils",
      icon: "🏺"
    },
    {
      name: "Wooden Cookware", 
      path: "/wooden-cookware",
      description: "Wooden cooking instruments",
      icon: "🪵"
    },
    {
      name: "Steel Cookware",
      path: "/steel-cookware", 
      description: "Modern steel utensils",
      icon: "🔩"
    },
    {
      name: "Copper & Brass Cookware",
      path: "/copper-brass-cookware",
      description: "Premium copper and brass items",
      icon: "✨"
    }
  ];

  const kitchenCategories = [
    { name: "Dinner Ware", path: "/dinner-ware", icon: "🍽️" },
    { name: "Drink Ware", path: "/drink-ware", icon: "🥤" },
    { name: "Bake Ware", path: "/bake-ware", icon: "🍰" },
    { name: "Storage Containers", path: "/storage-containers", icon: "📦" },
    { name: "Table Accessories", path: "/table-accessories", icon: "🕯️" },
    { name: "Pans & Pots", path: "/pans-pots", icon: "🍳" },
    { name: "Pressure Cookers", path: "/pressure-cookers", icon: "⚡" },
    { name: "Tawa & Griddles", path: "/tawa-griddles", icon: "🔥" }
  ];

  return (
    <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50 border-b">
      <div className="navbar-start">
        {/* Mobile Menu Button */}
        <div className="dropdown lg:hidden">
          <div 
            tabIndex={0} 
            role="button" 
            className="btn btn-ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-80 p-2 shadow-lg">
              <li><Link to="/home" className={isActive('/home')} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              
              {/* Cookware Categories Mobile */}
              <li>
                <details>
                  <summary>Cookware Categories</summary>
                  <ul className="p-2">
                    {cookwareCategories.map((category) => (
                      <li key={category.path}>
                        <Link 
                          to={category.path} 
                          className="flex items-center gap-2"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span>{category.icon}</span>
                          <span>{category.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>

              {/* Kitchen Categories Mobile */}
              <li>
                <details>
                  <summary>Kitchen & Cooking</summary>
                  <ul className="p-2">
                    {kitchenCategories.map((category) => (
                      <li key={category.path}>
                        <Link 
                          to={category.path} 
                          className="flex items-center gap-2"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span>{category.icon}</span>
                          <span>{category.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>

              <li><Link to="/about-us" className={isActive('/about-us')} onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
              <li><Link to="/contact-us" className={isActive('/contact-us')} onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
              
              {/* User Section Mobile */}
              <div className="divider my-2"></div>
              {isLoggedIn ? (
                <>
                  <li><Link to="/profile" onClick={() => setIsMenuOpen(false)}>Profile</Link></li>
                  <li><Link to="/orders" onClick={() => setIsMenuOpen(false)}>My Orders</Link></li>
                  <li><button onClick={handleLogout}>Logout</button></li>
                </>
              ) : (
                <li><Link to="/login" className="btn btn-primary btn-sm" onClick={() => setIsMenuOpen(false)}>Login</Link></li>
              )}
            </ul>
          )}
        </div>
        
        {/* Logo */}
        <Link to="/" className="btn btn-ghost text-xl text-primary font-bold">
          🍳 Cookeries Hub
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          <li><Link to="/home" className={`px-4 py-2 rounded-lg ${isActive('/home')}`}>Home</Link></li>
          
          {/* Cookware Categories Dropdown */}
          <li className="relative">
            <details 
              open={isCookwareOpen}
              onToggle={(e) => setIsCookwareOpen(e.target.open)}
            >
              <summary className="px-4 py-2 rounded-lg hover:bg-base-200 cursor-pointer">
                Cookware Types
              </summary>
              <ul className="p-4 bg-base-100 shadow-xl rounded-box w-80 z-50 absolute top-12">
                <li className="menu-title mb-2">
                  <span className="text-primary font-bold">By Material</span>
                </li>
                {cookwareCategories.map((category) => (
                  <li key={category.path}>
                    <Link 
                      to={category.path} 
                      className="flex items-center gap-3 p-3 hover:bg-base-200 rounded-lg transition-colors"
                    >
                      <span className="text-2xl">{category.icon}</span>
                      <div>
                        <div className="font-semibold">{category.name}</div>
                        <div className="text-sm text-gray-500">{category.description}</div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>

          {/* Kitchen Categories Dropdown */}
          <li className="relative">
            <details 
              open={isKitchenOpen}
              onToggle={(e) => setIsKitchenOpen(e.target.open)}
            >
              <summary className="px-4 py-2 rounded-lg hover:bg-base-200 cursor-pointer">
                Kitchen & Cooking
              </summary>
              <ul className="p-4 bg-base-100 shadow-xl rounded-box w-64 grid grid-cols-2 gap-2 z-50 absolute top-12">
                {kitchenCategories.map((category) => (
                  <li key={category.path}>
                    <Link 
                      to={category.path} 
                      className="flex items-center gap-2 p-2 hover:bg-base-200 rounded-lg transition-colors"
                    >
                      <span>{category.icon}</span>
                      <span className="text-sm">{category.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>

          <li><Link to="/about-us" className={`px-4 py-2 rounded-lg ${isActive('/about-us')}`}>About Us</Link></li>
          <li><Link to="/contact-us" className={`px-4 py-2 rounded-lg ${isActive('/contact-us')}`}>Contact Us</Link></li>
        </ul>
      </div>

      {/* Right Side Icons */}
      <div className="navbar-end gap-4">
        {/* Search Bar */}
        <div className="hidden md:flex items-center">
          <div className="form-control">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="input input-bordered input-sm w-40 lg:w-64" 
            />
          </div>
        </div>

        {/* Shopping Cart */}
        <Link to="/cart" className="btn btn-ghost btn-circle relative">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="absolute -top-1 -right-1 badge badge-primary badge-xs">3</span>
        </Link>

        {/* Wishlist */}
        <Link to="/wishlist" className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </Link>

        {/* User Profile */}
        {isLoggedIn ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-8 rounded-full bg-primary text-primary-content flex items-center justify-center">
                <span className="text-sm font-semibold">{user.name.charAt(0)}</span>
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/orders">My Orders</Link></li>
              <li><Link to="/wishlist">Wishlist</Link></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn btn-primary hidden sm:inline-flex">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Header;