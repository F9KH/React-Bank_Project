import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, {useState } from 'react';

import Navbar from './components/Navbar';
import InitialPage from './components/Initail';
import OperationsPage from './components/Operation';
import BreakdownPage from './components/Breakdown';

const App = () => {
  const [balance, setBalance] = useState(100);
  const updateBalanceF = (transactionAmount) => {
  const updateBalance = balance + transactionAmount
   setBalance(updateBalance); 
  }

  return (
    <Router>
      <Navbar balance={balance}/>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/operations" element={<OperationsPage updateBalance = {updateBalanceF} />} />
        <Route path="/breakdown" element={<BreakdownPage />} />
      </Routes>
    </Router>
  );
};

export default App;
