import React from 'react';
import { Link } from 'react-router-dom';

const ReturnAndExchange = () => {
  const policySections = [
    {
      title: "10-Day Return Policy",
      icon: "🔄",
      content: `We want you to be completely satisfied with your purchase from Cookeries Hub. If you're not happy with your order, we offer a 10-day return policy from the date of delivery.`,
      details: [
        "Items must be in original condition with all tags attached",
        "Original packaging must be intact and undamaged",
        "Product must be unused and in resalable condition",
        "Return request must be initiated within 10 days of delivery"
      ]
    },
    {
      title: "Easy Exchange Process",
      icon: "📦",
      content: `Prefer a different product? We make exchanges simple and hassle-free.`,
      details: [
        "Exchange for any product of equal or higher value",
        "No additional exchange fees",
        "Quick processing within 24-48 hours",
        "Free pickup for exchange items"
      ]
    },
    {
      title: "Refund Policy",
      icon: "💳",
      content: `Once we receive and inspect your returned item, we'll process your refund.`,
      details: [
        "Refunds processed within 5-7 business days",
        "Original payment method will be credited",
        "Cash on delivery orders refunded via bank transfer",
        "Shipping charges are non-refundable"
      ]
    }
  ];

  const returnSteps = [
    {
      step: 1,
      title: "Contact Customer Support",
      description: "Email us at support@cookerieshub.com or call +880 1333-372180 within 10 days of delivery",
      icon: "📞"
    },
    {
      step: 2,
      title: "Provide Details",
      description: "Share your order number, product details, and reason for return/exchange",
      icon: "📝"
    },
    {
      step: 3,
      title: "Get Approval",
      description: "We'll verify your request and provide return instructions within 24 hours",
      icon: "✅"
    },
    {
      step: 4,
      title: "Schedule Pickup",
      description: "We'll arrange free pickup from your location across Bangladesh",
      icon: "🚚"
    },
    {
      step: 5,
      title: "Receive Resolution",
      description: "Get your exchange product delivered or refund processed after quality check",
      icon: "🎁"
    }
  ];

  const nonReturnableItems = [
    "Products without original packaging",
    "Used or damaged items",
    "Personalized or custom-made products",
    "Products with broken seals",
    "Items purchased during clearance sales",
    "Gift cards and vouchers"
  ];

  const conditions = [
    {
      condition: "Defective Products",
      policy: "Full refund or replacement for manufacturing defects",
      timeline: "Report within 48 hours of delivery"
    },
    {
      condition: "Wrong Item Shipped",
      policy: "Free exchange with correct product + 10% discount coupon",
      timeline: "Report within 24 hours of delivery"
    },
    {
      condition: "Damaged During Shipping",
      policy: "Full refund or replacement at no extra cost",
      timeline: "Report within 24 hours of delivery"
    },
    {
      condition: "Change of Mind",
      policy: "Exchange for other products or store credit",
      timeline: "Within 10 days of delivery"
    }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-primary to-secondary text-primary-content py-16">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Return & Exchange Policy</h1>
            <p className="text-xl opacity-90">
              Easy returns and exchanges across Bangladesh
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
        <div className="max-w-6xl mx-auto">
          
          {/* Quick Summary */}
          <div className="bg-success text-success-content rounded-2xl p-8 mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">🎉 Easy 10-Day Return Policy</h2>
            <p className="text-xl mb-4">
              Not satisfied? We make returns and exchanges simple and hassle-free.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🔄</div>
                <h3 className="font-bold">10 Days Return</h3>
                <p className="text-sm">From delivery date</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🚚</div>
                <h3 className="font-bold">Free Pickup</h3>
                <p className="text-sm">Across Bangladesh</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💳</div>
                <h3 className="font-bold">Easy Refund</h3>
                <p className="text-sm">1-2 business days</p>
              </div>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {policySections.map((section, index) => (
              <div key={index} className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
                <div className="card-body text-center">
                  <div className="text-4xl mb-4">{section.icon}</div>
                  <h3 className="card-title justify-center text-xl mb-4">{section.title}</h3>
                  <p className="text-gray-600 mb-4">{section.content}</p>
                  <ul className="text-left space-y-2">
                    {section.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-success mt-1">✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Return Process Steps */}
          <div className="bg-base-100 rounded-2xl shadow-sm border border-base-300 p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Easy 5-Step Return Process</h2>
            <div className="space-y-6">
              {returnSteps.map((step) => (
                <div key={step.step} className="flex items-start gap-6 p-6 bg-base-200 rounded-lg hover:bg-base-300 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-content rounded-full flex items-center justify-center text-lg font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-2xl">{step.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conditions & Scenarios */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Conditions Table */}
            <div className="bg-base-100 rounded-2xl shadow-sm border border-base-300 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Return Conditions</h2>
              <div className="space-y-4">
                {conditions.map((item, index) => (
                  <div key={index} className="p-4 bg-base-200 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">{item.condition}</h3>
                    <p className="text-gray-600 text-sm mb-1">{item.policy}</p>
                    <p className="text-primary text-xs font-medium">Timeline: {item.timeline}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Non-Returnable Items */}
            <div className="bg-base-100 rounded-2xl shadow-sm border border-base-300 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Non-Returnable Items</h2>
              <div className="space-y-3">
                {nonReturnableItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-warning bg-opacity-20 rounded-lg">
                    <span className="text-warning">⚠️</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-base-100 rounded-2xl shadow-sm border border-base-300 p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="return-faq" />
                <div className="collapse-title text-xl font-medium">
                  How long does it take to process my refund?
                </div>
                <div className="collapse-content">
                  <p className="text-gray-600">
                    Refunds are processed within 1-2 business days after we receive and inspect your returned item. 
                    The time it takes for the refund to reflect in your account depends on your payment method and bank.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="return-faq" />
                <div className="collapse-title text-xl font-medium">
                  Do you offer free return pickup?
                </div>
                <div className="collapse-content">
                  <p className="text-gray-600">
                    Yes! We offer free return pickup service across Bangladesh for all eligible returns and exchanges. 
                    Our delivery partner will contact you to schedule a convenient pickup time.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="return-faq" />
                <div className="collapse-title text-xl font-medium">
                  What if I receive a damaged or wrong product?
                </div>
                <div className="collapse-content">
                  <p className="text-gray-600">
                    Please contact us within 24-48 hours of delivery. We'll arrange immediate replacement 
                    at no extra cost and may offer additional compensation for the inconvenience.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="return-faq" />
                <div className="collapse-title text-xl font-medium">
                  Can I exchange for a different color or size?
                </div>
                <div className="collapse-content">
                  <p className="text-gray-600">
                    Absolutely! You can exchange for any available color, size, or even a completely different product 
                    of equal or higher value. If you choose a higher-value product, you'll only pay the difference.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Support */}
          <div className="bg-primary/10 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help with Returns?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our customer support team is here to help you with any return or exchange queries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-base-100 rounded-lg">
                <div className="text-2xl mb-2">📞</div>
                <h3 className="font-semibold">Call Us</h3>
                <p className="text-primary">+880 1333-372180</p>
              </div>
              <div className="p-4 bg-base-100 rounded-lg">
                <div className="text-2xl mb-2">📧</div>
                <h3 className="font-semibold">Email Us</h3>
                <p className="text-primary">cookerieshub@gmail.com</p>
              </div>
              <div className="p-4 bg-base-100 rounded-lg">
                <div className="text-2xl mb-2">💬</div>
                <h3 className="font-semibold">Live Chat</h3>
                <p className="text-primary">24/7 Available</p>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us" className="btn btn-primary btn-lg">
                Contact Support
              </Link>
              <button className="btn btn-outline btn-lg" onClick={() => window.print()}>
                Print Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnAndExchange;