import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email Us",
      details: "cookerieshub@gmail.com",
      description: "Send us an email anytime"
    },
    {
      icon: "📞",
      title: "Call Us",
      details: "+880 1333-372180",
      description: "Mon to Fri, 9am to 6pm"
    },
    {
      icon: "📍",
      title: "Visit Us",
      details: "Faydabad, Uttara Dhaka, Bangladesh",
      description: "Come say hello at our office"
    },
    {
      icon: "💬",
      title: "Live Chat",
      details: "Available 24/7",
      description: "Get instant support"
    }
  ];

  const faqs = [
    {
      question: "What are your delivery areas in Bangladesh?",
      answer: "We deliver nationwide across Bangladesh 🇧🇩 — from bustling cities to remote villages. No matter where you are, we'll get your order to your doorstep through our reliable delivery partners. Whether you're in Dhaka, Chattogram, Sylhet, Khulna, Rajshahi, Barisal, Rangpur, Mymensingh, or any other district, we've got you covered!"
    },
    {
      question: "How long does shipping take?",
      answer: "Inside Dhaka: 1 days, Dhaka Sub areas : 2 days, Out site Dhaka: 2-3 days."
    },
    {
      question: "Do you offer cash on delivery?",
      answer: "Yes! We offer cash on delivery across Bangladesh with no extra charges."
    },
    {
      question: "What is your return policy?",
      answer: "We offer 10-day easy returns for defective products. Items must be in original condition with packaging."
    }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-primary to-secondary text-primary-content py-16">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-90">
              We're here to help! Get in touch with our team
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have questions about our products? Need help with your order? 
                  Our friendly team is here to help you with any inquiries.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-base-200 rounded-lg hover:bg-base-300 transition-colors">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-primary font-medium">{item.details}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="bg-primary/10 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold text-red-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-base-100 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="alert alert-success mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Full Name *</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="input input-bordered w-full focus:input-primary"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Email Address *</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="input input-bordered w-full focus:input-primary"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Phone Number</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+880 1XXX-XXXXXX"
                      className="input input-bordered w-full focus:input-primary"
                    />
                  </div>

                  {/* Subject */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Subject *</span>
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="select select-bordered w-full focus:select-primary"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="order-support">Order Support</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="complaint">Complaint</option>
                      <option value="suggestion">Suggestion</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Message *</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    rows="6"
                    className="textarea textarea-bordered w-full focus:textarea-primary"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="form-control pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary btn-lg w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="loading loading-spinner"></span>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title text-xl font-medium">
                      {faq.question}
                    </div>
                    <div className="collapse-content">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-16">
          <div className="bg-base-200 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Come visit our office in Dhaka to see our premium kitchenware collection in person. 
              Our experts will be happy to assist you in choosing the perfect products for your kitchen.
            </p>
            <div className="rounded-lg h-96 flex items-center justify-center overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7296.6643850960845!2d90.40615703800754!3d23.87783636433428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5cb30b66ba1%3A0x19ac62ea78781bc0!2sFaydabad%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd!4v1762604381446!5m2!1sen!2sbd" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Cookeries Hub Office Location"
              >
              </iframe>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-600 font-semibold">Faydabad, Uttara, Dhaka-1230, Bangladesh</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;