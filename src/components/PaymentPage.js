import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  // const [formSubmitted, setFormSubmitted] = useState(false);


  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryChange = (e) => {
    setExpiry(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  // const validateForm = () => {
  //   setIsFormValid(cardNumber.length === 16 && expiry.length === 4 && cvv.length === 3);
  // };
  useEffect(() => {
    setIsFormValid(cardNumber.trim() !== '' && expiry.trim() !== '' && cvv.trim() !== '');
  }, [cardNumber, expiry, cvv]);

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // setFormSubmitted(true);

    // Here you can implement any mock payment logic.
    // For this example, we'll just log the payment details.
    console.log("Card Number:", cardNumber);
    console.log("Expiry Date:", expiry);
    console.log("CVV:", cvv);

    // You can also add API calls here to simulate real payment processing.history.push("/login");
    
   

  };

  return (
    <div>
      <h1>Mock Payment Page</h1>
      <h3>Subscribe to continue</h3>
      <form onSubmit={handlePaymentSubmit}>
        <div>
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            maxLength="16"
            placeholder="Enter card number"
            required
          />
        </div>
        <div>
          <label htmlFor="expiry">Expiry Date</label>
          <input
            type="text"
            id="expiry"
            value={expiry}
            onChange={handleExpiryChange}
            maxLength="4"
            placeholder="MMYY"
            required
          />
        </div>
        <div>
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={handleCvvChange}
            maxLength="3"
            placeholder="CVV"
            required
          />
        </div>
      
        <p style={{ color: "red" }}>Please fill in the required fields.</p>
        <div style={{ display: "flex", alignItems: "center" }}>   
          <Link to="/login" >
            <button type="submit" disabled={!isFormValid}>
              Pay Now
            </button>
          </Link>



        {/* <Link to="/login" >
          <button type="submit" disabled={!isFormValid}>
            Pay Now
          </button>
        </Link> */}
        {/* <button type="submit">Pay Now</button> */}
        <Link to="/" >
        <button type="submit">Cancel</button>
        </Link>
        </div>
        
      </form>
    </div>
  );
};

export default PaymentPage;




// {formSubmitted && !isFormValid && (
//   <p style={{ color: "red" }}>Please fill in the required fields.</p>
// )}
// <Link to="/login" className="loginBtn">
//   <button type="submit" disabled={!isFormValid}>
//     Pay Now
//   </button>
// </Link>
