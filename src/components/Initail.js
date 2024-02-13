import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Initial.css';

const InitialPage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000')
      .then(response => {
        setTransactions(response.data);
      })
      .catch(error => {
        console.error('Error fetching transactions:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:4000/transactions/${id}`)
      .then(response => {
        console.log('Transaction deleted successfully:', response.data);
        setTransactions(transactions.filter(transaction => transaction._id !== id));
      })
      .catch(error => {
        console.error('Error deleting transaction:', error);
      });
  };

  return (
    <div>
      <h2>Transactions</h2>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Vendor</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction._id} className={`transaction-row ${transaction.amount > 0 ? 'deposit' : 'withdrawal'}`}>
              <td>{transaction.vendor}</td>
              <td>{transaction.category}</td>
              <td style={{ color: transaction.amount > 0 ? 'green' : 'red' }}>
                {transaction.amount > 0 ? '+' : '-'} ${Math.abs(transaction.amount)}
              </td>
              <td>
                <button className="delete-button" onClick={() => handleDelete(transaction._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InitialPage;
