import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');

  const faqCategories = {
    general: [
      {
        question: "What is Cookeries Hub?",
        answer: "Cookeries Hub is your premier online destination for high-quality kitchenware and cooking essentials in Bangladesh. We offer a wide range of products including dinnerware, cookware, bakeware, and kitchen accessories from trusted brands."
      },
      {
        question: "Do you have physical stores?",
        answer: "Currently, we operate as an online-only store with our main office in Uttara, Dhaka. However, we're planning to open physical showrooms in major cities across Bangladesh in the near future."
      },
      {
        question: "Are your products authentic and high-quality?",
        answer: "Yes! We source all our products directly from manufacturers and authorized distributors. Each product undergoes quality checks to ensure you receive only the best kitchenware for your home."
      }
    ],
    ordering: [
      {
        question: "How can I place an order?",
        answer: "You can place orders through our website or mobile app. Simply browse products, add to cart, and proceed to checkout. We accept various payment methods including cash on delivery, mobile banking, and credit/debit cards."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept Cash on Delivery (all over Bangladesh), bKash, Nagad, Rocket, Visa, MasterCard, and American Express. All online payments are secured with SSL encryption."
      },
      {
        question: "Can I modify or cancel my order?",
        answer: "You can modify or cancel your order within 1 hour of placement by contacting our customer support. After 1 hour, orders enter processing and cannot be modified."
      },
      {
        question: "Do I need to create an account to order?",
        answer: "While you can browse without an account, you'll need to create an account to place orders. This helps us serve you better with order tracking, wishlists, and personalized recommendations."
      }
    ],
    shipping: [
      {
        question: "What are your delivery areas?",
        answer: "We deliver nationwide across all 64 districts of Bangladesh! From metropolitan cities to remote villages, our delivery network covers the entire country."
      },
      {
        question: "How long does delivery take?",
        answer: "• Inside Dhaka: 1-2 business days\n• Dhaka Suburbs: 2-3 business days\n• Other Divisional Cities: 2-4 business days\n• District Areas: 3-5 business days\nNote: Delivery times may vary during holidays and festivals."
      },
      {
        question: "What are your delivery charges?",
        answer: "• Free delivery for orders above ৳2,000\n• ৳60 for orders below ৳2,000 inside Dhaka\n• ৳100-৳150 for orders outside Dhaka (depending on location)\n• Express delivery (within 24 hours) available for ৳150 extra"
      },
      {
        question: "Do you offer international shipping?",
        answer: "Currently, we only ship within Bangladesh. However, we're working on expanding our services to international customers in the near future."
      }
    ],
    returns: [
      {
        question: "What is your return policy?",
        answer: "We offer a 10-day return policy for unused products in original condition with packaging intact. Defective or damaged products can be returned within 48 hours of delivery for immediate replacement."
      },
      {
        question: "How do I return a product?",
        answer: "Contact our customer support within 10 days of delivery. We'll guide you through the process and arrange free pickup from your location. Returns are processed within 5-7 business days after we receive the product."
      },
      {
        question: "What items cannot be returned?",
        answer: "Personalized items, used products, products without original packaging, and items purchased during clearance sales cannot be returned unless defective."
      },
      {
        question: "How long do refunds take?",
        answer: "Refunds are processed within 5-7 business days after we receive and inspect the returned item. Cash on delivery refunds are processed via bank transfer within 3-5 business days."
      }
    ],
    products: [
      {
        question: "Do you offer warranty on products?",
        answer: "Yes! Most of our products come with manufacturer's warranty ranging from 6 months to 2 years depending on the product category. Warranty details are provided with each product."
      },
      {
        question: "Are your kitchenware products dishwasher safe?",
        answer: "Most of our dinnerware and cookware are dishwasher safe, but we recommend checking individual product descriptions for specific care instructions to ensure longevity."
      },
      {
        question: "Do you sell commercial kitchen equipment?",
        answer: "While we primarily focus on home kitchenware, we do have a selection of semi-professional and commercial-grade products suitable for small cafes and home-based businesses."
      },
      {
        question: "Can I request a product that's not listed?",
        answer: "Absolutely! We're always looking to expand our collection. If there's a specific product you're looking for, contact our support team and we'll try to source it for you."
      }
    ]
  };

  const popularQuestions = [
    {
      question: "Do you offer cash on delivery?",
      answer: "Yes! Cash on delivery is available across Bangladesh with no extra charges.",
      category: "ordering"
    },
    {
      question: "How can I track my order?",
      answer: "You can track your order through your account dashboard or by using the tracking link sent to your email/SMS.",
      category: "shipping"
    },
    {
      question: "What if I receive a damaged product?",
      answer: "Contact us within 48 hours of delivery with photos of the damaged product. We'll arrange immediate replacement at no extra cost.",
      category: "returns"
    },
    {
      question: "Do you have customer support in Bengali?",
      answer: "Yes! Our customer support team is fluent in both Bengali and English. You can communicate in your preferred language.",
      category: "general"
    }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-primary to-secondary text-primary-content py-16">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl opacity-90">
              Find quick answers to common questions about Cookeries Hub
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Quick Search & Popular Questions */}
          <div className="bg-base-200 rounded-2xl p-8 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Answers</h2>
              <p className="text-gray-600">Most commonly asked questions by our customers</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularQuestions.map((item, index) => (
                <div key={index} className="collapse collapse-plus bg-base-100">
                  <input type="radio" name="popular-faq" />
                  <div className="collapse-title text-lg font-medium">
                    {item.question}
                  </div>
                  <div className="collapse-content">
                    <p className="text-gray-600 whitespace-pre-line">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {Object.keys(faqCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`btn capitalize ${
                  activeCategory === category ? 'btn-primary' : 'btn-outline'
                }`}
              >
                {category === 'general' && '🌐 General'}
                {category === 'ordering' && '🛒 Ordering'}
                {category === 'shipping' && '🚚 Shipping'}
                {category === 'returns' && '🔄 Returns'}
                {category === 'products' && '🍳 Products'}
              </button>
            ))}
          </div>

          {/* FAQ List by Category */}
          <div className="bg-base-100 rounded-2xl shadow-sm border border-base-300 p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center capitalize">
              {activeCategory === 'general' && '🌐 General Questions'}
              {activeCategory === 'ordering' && '🛒 Ordering & Payment'}
              {activeCategory === 'shipping' && '🚚 Delivery & Shipping'}
              {activeCategory === 'returns' && '🔄 Returns & Refunds'}
              {activeCategory === 'products' && '🍳 Products & Quality'}
            </h2>
            
            <div className="space-y-4">
              {faqCategories[activeCategory].map((faq, index) => (
                <div key={index} className="collapse collapse-plus bg-base-200">
                  <input type="radio" name={`faq-${activeCategory}`} />
                  <div className="collapse-title text-xl font-medium">
                    {faq.question}
                  </div>
                  <div className="collapse-content">
                    <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Still Have Questions Section */}
          <div className="bg-primary/10 rounded-2xl p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
              <p className="text-gray-600 mb-6">
                Can't find the answer you're looking for? Our friendly customer support team is here to help you 24/7.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 bg-base-100 rounded-lg">
                  <div className="text-2xl mb-2">📞</div>
                  <h3 className="font-semibold text-gray-900">Call Us</h3>
                  <p className="text-primary">+880 1333-372180</p>
                  <p className="text-sm text-gray-600">9AM - 6PM, Everyday</p>
                </div>
                
                <div className="p-4 bg-base-100 rounded-lg">
                  <div className="text-2xl mb-2">📧</div>
                  <h3 className="font-semibold text-gray-900">Email Us</h3>
                  <p className="text-primary">cookerieshub@gmail.com</p>
                  <p className="text-sm text-gray-600">24/7 Response</p>
                </div>
                
                <div className="p-4 bg-base-100 rounded-lg">
                  <div className="text-2xl mb-2">💬</div>
                  <h3 className="font-semibold text-gray-900">Live Chat</h3>
                  <p className="text-primary">Available 24/7</p>
                  <p className="text-sm text-gray-600">Instant Help</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact-us" className="btn btn-primary btn-lg">
                  Contact Support
                </Link>
                <Link to="/products" className="btn btn-outline btn-lg">
                  Browse Products
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Help Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-info text-info-content rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">📋 Order Help</h3>
              <p className="mb-4">Need help with your current order?</p>
              <Link to="/track-order" className="btn btn-sm btn-outline text-white border-white">
                Track Your Order
              </Link>
            </div>
            
            <div className="bg-success text-success-content rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">🔧 Product Support</h3>
              <p className="mb-4">Need help with product usage or maintenance?</p>
              <Link to="/product-support" className="btn btn-sm btn-outline text-white border-white">
                Get Product Help
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;