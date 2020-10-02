import React, { useState } from 'react';
import { Header } from './components/header';
import { Balance } from './components/balance';
import { Incomeexpense } from './components/incomeexpense';
import { Transactionlist } from './components/transactionlist';
import { Newtransaction } from './components/newtransaction';
import Context from './statehandlers/Context';

import './App.css';

function App()
{
  let userBalance = useState(0);
  // console.log(userBalance);
  return (
    <Context.Provider value={userBalance}>
      <div>
        <Header />
        <div className='container'>
          <Balance />
          <Incomeexpense />
          <Transactionlist />
          <Newtransaction />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
