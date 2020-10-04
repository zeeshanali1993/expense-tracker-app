import React, { useState } from 'react';
import { Header } from './components/header';
import { Balance } from './components/balance';
import { Incomeexpense } from './components/incomeexpense';
import { Transactionlist } from './components/transactionlist';
import { Newtransaction } from './components/newtransaction';
import { GlobalProvider } from './statehandlers/globalstate';

import './App.css';

function App()
{
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <Incomeexpense />
        <Transactionlist />
        <Newtransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
