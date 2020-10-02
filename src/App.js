import React from 'react';
import { Header } from './components/header';
import { Balance } from './components/balance';
import { Incomeexpense } from './components/incomeexpense';
import { Transactionlist } from './components/transactionlist';

import './App.css';

function App()
{
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
        <Incomeexpense />
        <Transactionlist />
      </div>
    </div>
  );
}

export default App;
