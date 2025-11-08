import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  });

  const handlePreferenceChange = (type) => {
    if (type === 'necessary') return; // Necessary cookies cannot be disabled
    
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const savePreferences = () => {
    // In a real implementation, this would save to localStorage or send to your backend
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    alert('Your cookie preferences have been saved!');
  };

  const resetPreferences = () => {
    setCookiePreferences({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    });
  };

  const cookieTypes = [
    {
      type: "necessary",
      title: "Strictly Necessary Cookies",
      description: "These cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.",
      examples: ["Session management", "Shopping cart functionality", "Payment processing", "Security features"],
      mandatory: true
    },
    {
      type: "functional",
      title: "Functional Cookies",
      description: "These cookies allow the website to remember choices you make and provide enhanced, more personal features.",
      examples: ["Language preferences", "Region selection", "Username remember", "Layout customization"],
      mandatory: false
    },
    {
      type: "analytics",
      title: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
      examples: ["Page visit tracking", "Time spent on pages", "Error tracking", "Performance monitoring"],
      mandatory: false
    },
    {
      type: "marketing",
      title: "Marketing Cookies",
      description: "These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for individual users.",
      examples: ["Ad personalization", "Social media integration", "Retargeting campaigns", "Conversion tracking"],
      mandatory: false
    }
  ];

  const faqs = [
    {
      question: "What are cookies?",
      answer: "Cookies are small text files that are stored on your device when you visit a website. They help the website remember your actions and preferences over time."
    },
    {
      question: "How long do cookies stay on my device?",
      answer: "Session cookies are deleted when you close your browser. Persistent cookies remain for a set period specified in the cookie, which can range from a few minutes to several years."
    },
    {
      question: "Can I delete cookies?",
      answer: "Yes, you can delete cookies through your browser settings. However, this may affect your browsing experience and you may need to re-enter your preferences."
    },
    {
      question: "Do you use third-party cookies?",
      answer: "We may use third-party cookies for analytics and marketing purposes, but only with your consent. These are set by domains other than cookerieshub.com."
    },
    {
      question: "How often is this policy updated?",
      answer: "We review and update this cookie policy regularly. The last update date is shown at the top of this page."
    }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-primary to-secondary text-primary-content py-16">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-xl opacity-90">
              Learn how we use cookies to enhance your browsing experience
            </p>
            <div className="mt-4 text-sm opacity-80">
              Last Updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-base-200 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About Our Cookie Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Cookeries Hub, we use cookies and similar technologies to provide you with the best possible 
              shopping experience. This policy explains what cookies are, how we use them, and how you can 
              manage your preferences.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our website, you consent to the use of necessary cookies. For other types of cookies, 
              we will ask for your consent before placing them on your device.
            </p>
          </div>

          {/* Cookie Management */}
          <div className="bg-base-100 rounded-2xl shadow-sm border border-base-300 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Manage Your Cookie Preferences</h2>
            <p className="text-gray-600 mb-6">
              You can control which types of cookies we use (except for necessary cookies). 
              Your preferences will be remembered for future visits.
            </p>

            <div className="space-y-4">
              {cookieTypes.map((cookie) => (
                <div key={cookie.type} className="flex items-start justify-between p-4 bg-base-200 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-900">{cookie.title}</h3>
                      {cookie.mandatory && (
                        <span className="badge badge-primary badge-sm">Required</span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{cookie.description}</p>
                    <div className="text-xs text-gray-500">
                      <strong>Examples:</strong> {cookie.examples.join(', ')}
                    </div>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={cookiePreferences[cookie.type]}
                      onChange={() => handlePreferenceChange(cookie.type)}
                      disabled={cookie.mandatory}
                      className="toggle toggle-primary"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6 pt-6 border-t border-base-300">
              <button 
                onClick={savePreferences}
                className="btn btn-primary flex-1"
              >
                Save My Preferences
              </button>
              <button 
                onClick={resetPreferences}
                className="btn btn-outline flex-1"
              >
                Reset to Default
              </button>
            </div>
          </div>

          {/* Detailed Cookie Information */}
          <div className="bg-base-100 rounded-2xl shadow-sm border border-base-300 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Cookie Information</h2>
            
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th>Cookie Name</th>
                    <th>Type</th>
                    <th>Purpose</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>session_id</td>
                    <td>Necessary</td>
                    <td>Maintains your shopping session</td>
                    <td>Session</td>
                  </tr>
                  <tr>
                    <td>cart_items</td>
                    <td>Necessary</td>
                    <td>Stores items in your shopping cart</td>
                    <td>7 days</td>
                  </tr>
                  <tr>
                    <td>user_preferences</td>
                    <td>Functional</td>
                    <td>Remembers your site preferences</td>
                    <td>1 year</td>
                  </tr>
                  <tr>
                    <td>_ga</td>
                    <td>Analytics</td>
                    <td>Google Analytics tracking</td>
                    <td>2 years</td>
                  </tr>
                  <tr>
                    <td>_fbp</td>
                    <td>Marketing</td>
                    <td>Facebook pixel for ad tracking</td>
                    <td>3 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Browser Instructions */}
          <div className="bg-info text-info-content rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">How to Manage Cookies in Your Browser</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-3">Chrome</h3>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Click the three dots menu → Settings</li>
                  <li>Select "Privacy and security" → "Cookies and other site data"</li>
                  <li>Choose your preferred cookie settings</li>
                </ol>
              </div>
              <div>
                <h3 className="font-bold mb-3">Firefox</h3>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Click the menu button → Options</li>
                  <li>Select "Privacy & Security"</li>
                  <li>Under "Cookies and Site Data", choose your settings</li>
                </ol>
              </div>
              <div>
                <h3 className="font-bold mb-3">Safari</h3>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Safari menu → Preferences</li>
                  <li>Click "Privacy"</li>
                  <li>Choose "Block all cookies" or manage website data</li>
                </ol>
              </div>
              <div>
                <h3 className="font-bold mb-3">Edge</h3>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Click the three dots menu → Settings</li>
                  <li>Select "Cookies and site permissions"</li>
                  <li>Click "Cookies and site data" to manage</li>
                </ol>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-base-100 rounded-2xl shadow-sm border border-base-300 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="collapse collapse-plus bg-base-200">
                  <input type="radio" name="cookie-faq" />
                  <div className="collapse-title text-lg font-medium">
                    {faq.question}
                  </div>
                  <div className="collapse-content">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Links */}
          <div className="bg-primary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Need More Information?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <Link to="/contact-us" className="btn btn-outline btn-primary">
                Contact Us
              </Link>
              <Link to="/privacy-policy" className="btn btn-outline btn-primary">
                Privacy Policy
              </Link>
              <button className="btn btn-outline btn-primary" onClick={() => window.print()}>
                Print Policy
              </button>
            </div>
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                For any questions about our cookie policy, email us at:{' '}
                <a href="mailto:privacy@cookerieshub.com" className="link link-primary">
                  privacy@cookerieshub.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;