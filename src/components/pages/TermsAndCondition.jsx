import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
  return (
    <div className="min-h-screen bg-base-100 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="btn btn-ghost text-2xl font-bold text-primary mb-4">
            Cookeries Hub
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
          <p className="text-gray-600">Last updated: December 2024</p>
        </div>

        <div className="bg-base-100 rounded-lg shadow-lg p-8">
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              Welcome to Cookeries Hub. These Terms and Conditions govern your use of our website 
              and services. By accessing or using Cookeries Hub, you agree to be bound by these terms.
            </p>
            <p className="text-gray-700">
              Cookeries Hub ("we," "our," or "us") operates the website www.cookerieshub.com 
              (the "Service"). These terms apply to all visitors, users, and others who access 
              or use the Service.
            </p>
          </section>

          {/* Accounts */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. User Accounts</h2>
            <div className="space-y-3">
              <p className="text-gray-700">
                <strong>Eligibility:</strong> You must be at least 18 years old to create an account 
                and make purchases on our platform.
              </p>
              <p className="text-gray-700">
                <strong>Account Security:</strong> You are responsible for maintaining the 
                confidentiality of your account and password and for restricting access to your 
                computer or device.
              </p>
              <p className="text-gray-700">
                <strong>Accuracy:</strong> You agree to provide accurate, current, and complete 
                information during the registration process and to update such information to 
                keep it accurate.
              </p>
            </div>
          </section>

          {/* Products and Pricing */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Products and Pricing</h2>
            <div className="space-y-3">
              <p className="text-gray-700">
                <strong>Product Information:</strong> We strive to display accurate product 
                information, including descriptions, images, and prices. However, we do not 
                guarantee that all information is error-free.
              </p>
              <p className="text-gray-700">
                <strong>Pricing:</strong> All prices are in Taka /US Dollars (USD) unless otherwise 
                stated. We reserve the right to change prices at any time without notice.
              </p>
              <p className="text-gray-700">
                <strong>Availability:</strong> All products are subject to availability. We may 
                limit or cancel quantities purchased per person, per household, or per order.
              </p>
            </div>
          </section>

          {/* Orders and Payments */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Orders and Payments</h2>
            <div className="space-y-3">
              <p className="text-gray-700">
                <strong>Order Acceptance:</strong> Your receipt of an order confirmation does 
                not signify our acceptance of your order. We reserve the right to accept or 
                decline your order for any reason.
              </p>
              <p className="text-gray-700">
                <strong>Payment Methods:</strong> We accept various payment methods including 
                credit cards, debit cards, and digital wallets. All payments are processed 
                through secure payment gateways.
              </p>
              <p className="text-gray-700">
                <strong>Sales Tax:</strong> Applicable sales tax will be added to your order 
                total based on your shipping address.
              </p>
            </div>
          </section>

          {/* Shipping and Delivery */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Shipping and Delivery</h2>
            <div className="space-y-3">
              <p className="text-gray-700">
                <strong>Shipping Times:</strong> We aim to process and ship orders within 2-3 
                business days. Delivery times vary based on your location and shipping method.
              </p>
              <p className="text-gray-700">
                <strong>Shipping Costs:</strong> Shipping costs are calculated at checkout 
                based on your location and order weight.
              </p>
              <p className="text-gray-700">
                <strong>International Shipping:</strong> We ship to select international 
                locations. Customers are responsible for any customs duties, taxes, or 
                import fees.
              </p>
            </div>
          </section>

          {/* Returns and Refunds */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Returns and Refunds</h2>
            <div className="space-y-3">
              <p className="text-gray-700">
                <strong>Return Policy:</strong> We accept returns within 10 days of delivery 
                for unused products in original packaging. Some items may be final sale.
              </p>
              <p className="text-gray-700">
                <strong>Return Process:</strong> Contact our customer service team to initiate 
                a return. Return shipping costs are the responsibility of the customer unless 
                the return is due to our error.
              </p>
              <p className="text-gray-700">
                <strong>Refunds:</strong> Refunds will be processed to the original payment 
                method within 1-2 business days after we receive the returned items.
              </p>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
            <div className="space-y-3">
              <p className="text-gray-700">
                All content on this website, including text, graphics, logos, images, and 
                software, is the property of Cookeries Hub and protected by copyright laws.
              </p>
              <p className="text-gray-700">
                You may not reproduce, distribute, modify, or create derivative works from 
                any content without our express written permission.
              </p>
            </div>
          </section>

          {/* User Conduct */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. User Conduct</h2>
            <div className="space-y-3">
              <p className="text-gray-700">You agree not to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Use the Service for any illegal purpose</li>
                <li>Submit false or misleading information</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of the Service</li>
                <li>Use automated systems to access the Service</li>
              </ul>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700">
              Cookeries Hub shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages resulting from your use or inability to 
              use the Service.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these terms at any time. We will notify users 
              of significant changes by posting the new terms on the website. Your continued 
              use of the Service after changes constitutes acceptance of the new terms.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
            <p className="text-gray-700">
              These Terms shall be governed by and construed in accordance with the laws of 
              the State of Delaware, without regard to its conflict of law provisions.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
            <div className="space-y-2 text-gray-700">
              <p>If you have any questions about these Terms, please contact us:</p>
              <p>Email: cookerieshub@gmail.com</p>
              <p>Phone: +880 1333-372180</p>
              <p>Address: 52 Faydabad, Uttara Dhaka, Bangladesh</p>
            </div>
          </section>

          {/* Acceptance */}
          <section className="bg-primary/10 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Acceptance of Terms</h3>
            <p className="text-gray-700">
              By using our website and services, you acknowledge that you have read, 
              understood, and agree to be bound by these Terms and Conditions.
            </p>
          </section>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>
            <Link to="/contact-us" className="btn btn-outline">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;