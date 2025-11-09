import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHoverDropdown, setActiveHoverDropdown] = useState(null);
  const [activeClickDropdown, setActiveClickDropdown] = useState(null);

  // Mock user authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user] = useState({ name: "John Doe" });

  // Refs for dropdowns and menus
  const cookwareDropdownRef = useRef(null);
  const kitchenDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const cookwareClickRef = useRef(null);
  const kitchenClickRef = useRef(null);

  const isActive = (path) => {
    return location.pathname === path ? 'text-primary font-semibold bg-primary/10' : 'text-gray-700 hover:text-primary';
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close mobile menu
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }

      // Close click dropdowns when clicking outside
      if (activeClickDropdown && 
          !cookwareClickRef.current?.contains(event.target) && 
          !kitchenClickRef.current?.contains(event.target)) {
        setActiveClickDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeClickDropdown]);

  // Hover functionality for desktop dropdowns
  useEffect(() => {
    const handleMouseEnter = (dropdown) => {
      setActiveHoverDropdown(dropdown);
    };

    const handleMouseLeave = (event) => {
      // Check if mouse is leaving to outside the dropdown area
      if (!event.relatedTarget || 
          !event.currentTarget.contains(event.relatedTarget)) {
        setActiveHoverDropdown(null);
      }
    };

    const cookwareElement = cookwareDropdownRef.current;
    const kitchenElement = kitchenDropdownRef.current;

    if (cookwareElement) {
      cookwareElement.addEventListener('mouseenter', () => handleMouseEnter('cookware'));
      cookwareElement.addEventListener('mouseleave', handleMouseLeave);
    }

    if (kitchenElement) {
      kitchenElement.addEventListener('mouseenter', () => handleMouseEnter('kitchen'));
      kitchenElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (cookwareElement) {
        cookwareElement.removeEventListener('mouseenter', () => handleMouseEnter('cookware'));
        cookwareElement.removeEventListener('mouseleave', handleMouseLeave);
      }
      if (kitchenElement) {
        kitchenElement.removeEventListener('mouseenter', () => handleMouseEnter('kitchen'));
        kitchenElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Toggle click dropdowns
  const toggleClickDropdown = (dropdown) => {
    setActiveClickDropdown(activeClickDropdown === dropdown ? null : dropdown);
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
      name: " Stainless Steel Cookware",
      path: "/stainless-steel-cookware", 
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
        <div className="dropdown lg:hidden" ref={mobileMenuRef}>
          <button 
            className="btn btn-ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-80 p-2 shadow-lg absolute left-0 top-12">
              <li>
                <Link 
                  to="/home" 
                  className={isActive('/home')} 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              
              {/* Cookware Categories Mobile */}
              <li className="dropdown dropdown-right">
                <details>
                  <summary className="font-medium">Cookware Categories</summary>
                  <ul className="p-2 bg-base-100 rounded-box shadow">
                    {cookwareCategories.map((category) => (
                      <li key={category.path}>
                        <Link 
                          to={category.path} 
                          className="flex items-center gap-2 py-2 px-3 hover:bg-base-200 rounded-lg"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="text-lg">{category.icon}</span>
                          <div>
                            <div className="font-medium">{category.name}</div>
                            <div className="text-xs text-gray-500">{category.description}</div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>

              {/* Kitchen Categories Mobile */}
              <li className="dropdown dropdown-right">
                <details>
                  <summary className="font-medium">Kitchen & Cooking</summary>
                  <ul className="p-2 bg-base-100 rounded-box shadow grid grid-cols-1 gap-1">
                    {kitchenCategories.map((category) => (
                      <li key={category.path}>
                        <Link 
                          to={category.path} 
                          className="flex items-center gap-2 py-2 px-3 hover:bg-base-200 rounded-lg"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span>{category.icon}</span>
                          <span className="text-sm">{category.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>

              <li>
                <Link 
                  to="/about-us" 
                  className={isActive('/about-us')} 
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact-us" 
                  className={isActive('/contact-us')} 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
              
              {/* User Section Mobile */}
              <div className="divider my-2"></div>
              {isLoggedIn ? (
                <>
                  <li>
                    <Link to="/profile" onClick={() => setIsMenuOpen(false)}>Profile</Link>
                  </li>
                  <li>
                    <Link to="/orders" onClick={() => setIsMenuOpen(false)}>My Orders</Link>
                  </li>
                  <li>
                    <button onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}>
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link 
                    to="/login" 
                    className="btn btn-primary btn-sm justify-start" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                </li>
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
          <li>
            <Link to="/home" className={`px-4 py-2 rounded-lg ${isActive('/home')}`}>
              Home
            </Link>
          </li>
          
          {/* Cookware Categories Dropdown - BOTH HOVER AND CLICK */}
          <li 
            className="dropdown dropdown-hover relative" 
            ref={cookwareDropdownRef}
          >
            {/* Clickable area */}
            <div ref={cookwareClickRef}>
              <button 
                className="px-4 py-2 rounded-lg hover:bg-base-200 cursor-pointer flex items-center gap-1"
                onClick={() => toggleClickDropdown('cookware')}
              >
                Cookware Types
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Dropdown Content - Shows on HOVER or CLICK */}
            {(activeHoverDropdown === 'cookware' || activeClickDropdown === 'cookware') && (
              <ul 
                className="dropdown-content menu p-4 bg-base-100 shadow-xl rounded-box w-80 z-50 absolute top-12 left-0"
                onMouseEnter={() => setActiveHoverDropdown('cookware')}
                onMouseLeave={() => setActiveHoverDropdown(null)}
              >
                <li className="menu-title mb-2">
                  <span className="text-primary font-bold">By Material</span>
                </li>
                {cookwareCategories.map((category) => (
                  <li key={category.path}>
                    <Link 
                      to={category.path} 
                      className="flex items-center gap-3 p-3 hover:bg-base-200 rounded-lg transition-colors"
                      onClick={() => setActiveClickDropdown(null)}
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
            )}
          </li>

          {/* Kitchen Categories Dropdown - BOTH HOVER AND CLICK */}
          <li 
            className="dropdown dropdown-hover relative" 
            ref={kitchenDropdownRef}
          >
            {/* Clickable area */}
            <div ref={kitchenClickRef}>
              <button 
                className="px-4 py-2 rounded-lg hover:bg-base-200 cursor-pointer flex items-center gap-1"
                onClick={() => toggleClickDropdown('kitchen')}
              >
                Kitchen & Cooking
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Dropdown Content - Shows on HOVER or CLICK */}
            {(activeHoverDropdown === 'kitchen' || activeClickDropdown === 'kitchen') && (
              <ul 
                className="dropdown-content menu p-4 bg-base-100 shadow-xl rounded-box w-64 grid grid-cols-2 gap-2 z-50 absolute top-12 left-0"
                onMouseEnter={() => setActiveHoverDropdown('kitchen')}
                onMouseLeave={() => setActiveHoverDropdown(null)}
              >
                {kitchenCategories.map((category) => (
                  <li key={category.path}>
                    <Link 
                      to={category.path} 
                      className="flex items-center gap-2 p-2 hover:bg-base-200 rounded-lg transition-colors"
                      onClick={() => setActiveClickDropdown(null)}
                    >
                      <span>{category.icon}</span>
                      <span className="text-sm">{category.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link to="/about-us" className={`px-4 py-2 rounded-lg ${isActive('/about-us')}`}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className={`px-4 py-2 rounded-lg ${isActive('/contact-us')}`}>
              Contact Us
            </Link>
          </li>
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
        <Link to="/cart" className="btn btn-ghost btn-circle btn-sm relative">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="absolute -top-1 -right-1 badge badge-primary badge-xs">3</span>
        </Link>

        {/* Wishlist */}
        <Link to="/wishlist" className="btn btn-ghost btn-circle btn-sm hidden sm:flex">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </Link>

        {/* User Profile */}
        {isLoggedIn ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-sm avatar">
              <div className="w-6 rounded-full bg-primary text-primary-content flex items-center justify-center text-xs font-semibold">
                {user.name.charAt(0)}
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
          <Link to="/login" className="btn btn-primary btn-sm hidden sm:inline-flex">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;