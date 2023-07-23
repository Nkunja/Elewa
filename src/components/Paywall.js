// client/src/components/Paywall.js
import React from 'react';

const Paywall = ({ setShowPaywall }) => {
  const handlePurchasePremium = () => {
    // Implement payment logic (mock payment) to grant premium membership
    console.log('Payment processed. Premium membership activated!');
    setShowPaywall(false); // Hide the paywall after successful payment
  };

  return (
    <div>
      <h2>Upgrade to Premium</h2>
      <p>Unlock access to all posts with a premium membership.</p>
      <button onClick={handlePurchasePremium}>Purchase Premium</button>
      <button onClick={() => setShowPaywall(false)}>Close</button>
    </div>
  );
};

export default Paywall;
