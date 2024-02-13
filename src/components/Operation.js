import React, { useState } from 'react';
import axios from 'axios';
import './Operation.css';

const OperationsPage = ({updateBalance}) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [vendor, setVendor] = useState('');

  const handleDeposit = (e) => {
    e.preventDefault();

    if (!amount) {
      alert('Please fill in the amount field.');
      return;
    }


    axios.post('http://localhost:4000/transactions', { amount : amount*(1) , category, vendor })
      .then(response => {
        console.log('Transaction added successfully:', response.data);
        setAmount('');
        setCategory('');
        setVendor('');
        updateBalance(amount*(1)) 

      })
      .catch(error => {
        console.error('Error adding transaction:', error);
      });
  };

  const handleWithdraw = (e) => {
    e.preventDefault();

    if (!amount) {
      alert('Please fill in the amount field.');
      return;
    }

    axios.post('http://localhost:4000/transactions', {amount : amount*(-1), category, vendor })
      .then(response => {
        console.log('Transaction added successfully:', response.data);
        setAmount('');
        setCategory('');
        setVendor('');
        updateBalance(amount*(-1)) 
      })
      .catch(error => {
        console.error('Error adding transaction:', error);
      });
  };

  return (
    <div className="page">
  <h2 className="page-title">Operations Page</h2>
  <form className="transaction-form">
    <div className="form-field">
      <label className="field-label" htmlFor="amount">Amount:</label>
      <input className="field-input" type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
    </div>
    <div className="form-field">
      <label className="field-label" htmlFor="category">Category:</label>
      <input className="field-input" type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} />
    </div>
    <div className="form-field">
      <label className="field-label" htmlFor="vendor">Vendor:</label>
      <input className="field-input" type="text" id="vendor" value={vendor} onChange={(e) => setVendor(e.target.value)} />
    </div>
    <div className="button-container">
      <button className="deposit-button" onClick={handleDeposit}>Deposit</button>
      <button className="add-button" onClick={handleWithdraw}>Withdraw</button>
      
    </div>
  </form>
</div>
  );
};

export default OperationsPage;

























