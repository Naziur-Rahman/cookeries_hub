import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LogOut = () => {
  const [countdown, setCountdown] = useState(5);
  const [isLoggingOut, setIsLoggingOut] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate logout process
    const logoutTimer = setTimeout(() => {
      setIsLoggingOut(false);
      
      // Countdown to redirect
      const countdownInterval = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(countdownInterval);
            // Redirect to home page
            navigate('/');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(countdownInterval);
    }, 1500);

    return () => clearTimeout(logoutTimer);
  }, [navigate]);

  const handleReturnHome = () => {
    navigate('/');
  };

  const handleLoginAgain = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link to="/" className="btn btn-ghost text-2xl font-bold text-primary mb-2">
            Cookeries Hub
          </Link>
        </div>

        {/* Logout Content */}
        <div className="bg-base-100 p-8 rounded-2xl shadow-lg text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center">
              <svg 
                className="w-10 h-10 text-success" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Loading State */}
          {isLoggingOut ? (
            <>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Logging Out...</h2>
              <p className="text-gray-600 mb-6">Please wait while we secure your account</p>
              <div className="flex justify-center">
                <span className="loading loading-spinner loading-lg text-primary"></span>
              </div>
            </>
          ) : (
            <>
              {/* Success State */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Successfully Logged Out</h2>
              <p className="text-gray-600 mb-2">
                You have been securely logged out of your Cookeries Hub account.
              </p>
              <p className="text-gray-500 text-sm mb-6">
                Redirecting to home page in <span className="font-bold text-primary">{countdown}</span> seconds...
              </p>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleReturnHome}
                  className="btn btn-primary w-full"
                >
                  Return to Home Page
                </button>
                <button
                  onClick={handleLoginAgain}
                  className="btn btn-outline w-full"
                >
                  Sign In Again
                </button>
              </div>

              {/* Security Message */}
              <div className="mt-6 p-4 bg-info/20 rounded-lg">
                <div className="flex items-start gap-3">
                  <svg 
                    className="w-5 h-5 text-info mt-0.5 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <div className="text-left">
                    <p className="text-sm font-medium text-info">Account Secured</p>
                    <p className="text-xs text-gray-600">
                      Your session has been securely closed. Thank you for shopping with Cookeries Hub!
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Additional Links */}
        <div className="text-center text-sm text-gray-600">
          <p>
            Having issues?{' '}
            <Link to="/contact" className="link link-primary">Contact Support</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogOut;