import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: `We collect information to provide better services to all our users. The types of information we collect include:
      
• Personal Information: When you create an account, place an order, or contact us, we may collect your name, email address, phone number, shipping address, and payment information.
• Usage Information: We collect information about how you use our website, including products you view, search queries, and browsing behavior.
• Device Information: We may collect information about the device you use to access our services, including hardware model, operating system, and unique device identifiers.
• Location Information: With your consent, we may collect and process information about your actual location to provide location-based services.`
    },
    {
      title: "How We Use Your Information",
      content: `We use the information we collect for various purposes, including:

• To process and fulfill your orders for kitchenware products
• To provide, maintain, and improve our services
• To send you transactional messages, order confirmations, and shipping updates
• To personalize your experience and show you relevant products
• To communicate with you about promotions, offers, and new products (with your consent)
• To detect, prevent, and address technical issues and fraud
• To comply with legal obligations and protect our rights`
    },
    {
      title: "Information Sharing",
      content: `We do not sell your personal information to third parties. We may share your information in the following circumstances:

• Service Providers: We share information with trusted third parties who assist us in operating our website, conducting our business, or servicing you (payment processors, shipping carriers, etc.).
• Legal Requirements: We may disclose information when required by law or to protect our rights, property, or safety.
• Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.`
    },
    {
      title: "Data Security",
      content: `We implement appropriate security measures to protect your personal information:

• SSL encryption for all data transmissions
• Secure payment processing through trusted partners
• Regular security assessments and updates
• Limited access to personal information to authorized personnel only
• While we strive to use commercially acceptable means to protect your information, no method of transmission over the Internet is 100% secure.`
    },
    {
      title: "Your Rights and Choices",
      content: `You have certain rights regarding your personal information:

• Access and Update: You can access and update your personal information through your account settings.
• Marketing Communications: You can opt-out of marketing communications at any time by using the unsubscribe link in our emails.
• Cookies: You can set your browser to refuse all or some browser cookies.
• Account Deletion: You can request deletion of your account and associated data by contacting us.
• Data Portability: You can request a copy of your personal data in a structured format.`
    },
    {
      title: "Cookies and Tracking",
      content: `We use cookies and similar tracking technologies to:

• Remember your preferences and settings
• Understand how you use our website
• Deliver personalized content and advertisements
• Analyze website traffic and trends

You can control cookies through your browser settings, but disabling cookies may affect your experience on our website.`
    },
    {
      title: "Data Retention",
      content: `We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.

• Order information: 7 years for tax and legal purposes
• Account information: Until you request deletion
• Marketing preferences: Until you opt-out or request deletion
• Website analytics: 26 months`
    },
    {
      title: "International Transfers",
      content: `Your information may be transferred to and processed in countries other than Bangladesh. We ensure appropriate safeguards are in place to protect your information when it is transferred internationally, including through standard contractual clauses and data protection agreements.`
    },
    {
      title: "Children's Privacy",
      content: `Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal information from a child under 16, we will take steps to delete such information.`
    },
    {
      title: "Changes to This Policy",
      content: `We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date. We encourage you to review this privacy policy periodically for any changes.`
    },
    {
      title: "Contact Us",
      content: `If you have any questions about this Privacy Policy or our data practices, please contact us:

• Email: privacy@cookerieshub.com
• Phone: +880 1333-372180
• Address: Faydabad, Uttara, Dhaka-1230, Bangladesh
• Office Hours: Monday-Friday, 9:00 AM - 6:00 PM`
    }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-primary to-secondary text-primary-content py-16">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl opacity-90">
              Your privacy is important to us. Learn how we protect and manage your data.
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Cookeries Hub</h2>
            <p className="text-gray-700 leading-relaxed">
              At Cookeries Hub, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              or make a purchase from us.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              By using our services, you agree to the collection and use of information in accordance with this policy. 
              We encourage you to read this Privacy Policy carefully to understand our practices.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-base-100 rounded-2xl shadow-sm border border-base-300 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-start">
                  <span className="bg-primary text-primary-content rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4 flex-shrink-0">
                    {index + 1}
                  </span>
                  {section.title}
                </h2>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line ml-12">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="mt-12 bg-primary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <Link to="/contact-us" className="btn btn-outline btn-primary">
                Contact Support
              </Link>
              <Link to="/terms-of-service" className="btn btn-outline btn-primary">
                Terms of Service
              </Link>
              <button className="btn btn-outline btn-primary" onClick={() => window.print()}>
                Print Policy
              </button>
            </div>
          </div>

          {/* Consent Banner */}
          <div className="mt-8 bg-info text-info-content rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl">ℹ️</div>
              <div>
                <h4 className="font-bold text-lg mb-2">Your Consent</h4>
                <p className="text-sm">
                  By using our website, you consent to our Privacy Policy and agree to its terms. 
                  If you do not agree with this policy, please do not use our website.
                </p>
              </div>
            </div>
          </div>

          {/* Update Notification */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              This policy may be updated from time to time. Please check back periodically for changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;