import React from 'react';
import { Link } from 'react-router-dom';
import imgNaziur from '../../assets/images/teamMember/Md. Naziur Rahma.png';
import imgSafayat from '../../assets/images/teamMember/Safayat Hossain.png';
import imgShanto from '../../assets/images/teamMember/Md Shanto.png';
const AboutUs = () => {
  const teamMembers = [
    {
      name: "Md. Naziur Rahman",
      role: "Founder & CEO",
      image: imgNaziur,
      description: "Passionate home chef with 10+ years in culinary arts"
    },
    {
      name: "Safayat Hossain",
      role: "Head of Marketing",
      image: imgSafayat,
      description: "Former restaurant owner and kitchenware expert"
    },
    {
      name: "Md Shanto",
      role: "Customer Experience",
      image: imgShanto,
      description: "Dedicated to ensuring your complete satisfaction"
    }
  ];

  const values = [
    {
      icon: "⭐",
      title: "Quality First",
      description: "We source only the highest quality materials and products"
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "Constantly exploring new kitchen technologies and trends"
    },
    {
      icon: "🌱",
      title: "Sustainability",
      description: "Committed to eco-friendly products and packaging"
    },
    {
      icon: "❤️",
      title: "Customer Love",
      description: "Your satisfaction is our top priority"
    }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-primary to-secondary text-primary-content py-16">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">About Cookeries Hub</h1>
            <p className="text-xl opacity-90">
              Your trusted partner in creating memorable culinary experiences
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Our Story */}
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Welcome to <strong>Cookeries Hub</strong>! Founded in 2020, we started as a small 
                  family business passionate about bringing joy to home cooking. What began as a 
                  simple dream to provide quality kitchenware has grown into a trusted destination 
                  for cooking enthusiasts across Bangladesh.
                </p>
                <p>
                  We are passionate about providing high-quality kitchenware and cooking essentials 
                  to enhance your culinary experience. Our mission is to offer a wide range of 
                  products that cater to both amateur cooks and professional chefs alike.
                </p>
                <p>
                  At Cookeries Hub, we believe that the right tools can make all the difference 
                  in the kitchen. That's why we carefully curate our selection to ensure that 
                  every item meets our standards for durability, functionality, and style.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-primary/10 rounded-2xl p-8">
                <div className="text-6xl mb-4">👨‍🍳</div>
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="text-success">✓</span>
                    <span>100% Quality Verified Products</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-success">✓</span>
                    <span>10-Day Money Back Guarantee</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-success">✓</span>
                    <span>Fast Shipping Across Bangladesh</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-success">✓</span>
                    <span>24/7 Customer Support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-success">✓</span>
                    <span>Easy Return Policy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
                <div className="card-body text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="card-title justify-center text-xl mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Meet the Team */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="card-body text-center">
                  {/* Team Member Image with Fallback */}
                  <div className="relative mx-auto mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 mx-auto"
                      onError={(e) => {
                        // If image fails to load, show fallback
                        e.target.style.display = 'none';
                        const fallback = e.target.parentNode.querySelector('.avatar-fallback');
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    {/* Fallback Avatar */}
                    <div 
                      className="avatar-fallback w-24 h-24 rounded-full bg-primary text-primary-content flex items-center justify-center text-2xl font-bold border-4 border-primary/20 mx-auto"
                      style={{ display: 'none' }}
                    >
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  
                  <h3 className="card-title justify-center text-2xl">{member.name}</h3>
                  <p className="text-primary font-semibold">{member.role}</p>
                  <p className="text-gray-600 mt-2">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="stats stats-vertical lg:stats-horizontal shadow w-full bg-primary text-primary-content">
            <div className="stat">
              <div className="stat-title text-primary-content">Happy Customers</div>
              <div className="stat-value">10,000+</div>
              <div className="stat-desc text-white">Since 2023</div>
            </div>
            
            <div className="stat">
              <div className="stat-title text-primary-content">Products</div>
              <div className="stat-value">500+</div>
              <div className="stat-desc text-white">Quality Items</div>
            </div>
            
            <div className="stat">
              <div className="stat-title text-primary-content">Orders Delivered</div>
              <div className="stat-value">50,000+</div>
              <div className="stat-desc text-white">Across Bangladesh</div>
            </div>

            <div className="stat">
              <div className="stat-title text-primary-content">Support</div>
              <div className="stat-value">24/7</div>
              <div className="stat-desc text-white">Customer Care</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-base-200 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Kitchen?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore our curated collection of kitchen essentials and discover why thousands of home cooks trust Cookeries Hub across Bangladesh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/home" className="btn btn-primary btn-lg">
                Shop Now
              </Link>
              <Link to="/contact-us" className="btn btn-outline btn-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;