import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand & Description */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold text-white">Cookeries Hub</Link>
            <p className="text-neutral-content/80 max-w-xs">
              Your trusted partner for premium kitchenware and cooking essentials. Quality products for every home chef.
            </p>
            <div className="flex gap-4">
              {/* Facebook */}
              <a className="btn btn-ghost btn-circle btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
              
              {/* Instagram */}
              <a className="btn btn-ghost btn-circle btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a className="btn btn-ghost btn-circle btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Categories */}
          <nav>
            <h6 className="footer-title text-white">Shop Categories</h6>
            <div className='grid grid-cols-2 gap-2'>
              <Link to="/dinner-ware" className="link link-hover text-neutral-content/80 hover:text-white">Dinner Ware</Link>
              <Link to="/drink-ware" className="link link-hover text-neutral-content/80 hover:text-white">Drink Ware</Link>
              <Link to="/bake-ware" className="link link-hover text-neutral-content/80 hover:text-white">Bake Ware</Link>
              <Link to="/storage-containers" className="link link-hover text-neutral-content/80 hover:text-white">Storage & Containers</Link>
              <Link to="/pans-pots" className="link link-hover text-neutral-content/80 hover:text-white">Pans & Pots</Link>
            </div>
          </nav>

          {/* Customer Service */}
          <nav>
            <h6 className="footer-title text-white">Customer Service</h6>
            <div className='grid grid-cols-2 gap-2'>
              <Link to="/about-us" className="link link-hover text-neutral-content/80 hover:text-white">About Us</Link>
              <Link to="/contact-us" className="link link-hover text-neutral-content/80 hover:text-white">Contact Us</Link>
              <Link to="/shipping-info" className="link link-hover text-neutral-content/80 hover:text-white">Shipping Information</Link>
              <Link to="/returns" className="link link-hover text-neutral-content/80 hover:text-white">Returns & Exchanges</Link>
              <Link to="/faq" className="link link-hover text-neutral-content/80 hover:text-white">FAQ</Link>
            </div>
          </nav>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h6 className="footer-title text-white">Stay Updated</h6>
            <p className="text-neutral-content/80">Subscribe to get special offers and cooking tips</p>
            <div className="join">
              <input 
                type="email" 
                placeholder="Your email" 
                className="input input-bordered join-field text-neutral"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-neutral-content/80">cookerieshub@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm text-neutral-content/80">+880 1333-372180</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-content/20 mt-8 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-center lg:text-left">
              <p className="text-neutral-content/60 text-sm">
                © 2024 Cookeries Hub. All rights reserved.
              </p>
            </div>
            <nav className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy-policy" className="link link-hover text-neutral-content/60 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="/terms-of-service" className="link link-hover text-neutral-content/60 hover:text-white text-sm">Terms of Service</Link>
              <Link to="/cookie-policy" className="link link-hover text-neutral-content/60 hover:text-white text-sm">Cookie Policy</Link>
              <Link to="/sitemap" className="link link-hover text-neutral-content/60 hover:text-white text-sm">Sitemap</Link>
            </nav>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center gap-8 mt-6">
          <div className="flex items-center gap-2 text-sm text-neutral-content/60">
            <span className="text-success">✓</span>
            Secure Payments
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-content/60">
            <span className="text-success">✓</span>
            Fast Shipping & Delivery
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-content/60">
            <span className="text-success">✓</span>
            10-Day Returns
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;