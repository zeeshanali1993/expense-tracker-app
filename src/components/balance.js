import React, { useContext } from 'react';
import { GlobalContext } from '../statehandlers/globalstate';

export const Balance = () =>
{
    const { transactions } = useContext(GlobalContext);
    let amount = transactions.map(transactionAmount => transactionAmount.amount);
    let totalBalance = amount.reduce((sum, value) => (sum += value), 0).toFixed(2);
    let sign = totalBalance < 0 ? '-' : '+';
    return (
        <div className='container'>
            <h4>Your balance</h4>
            <h1 id='balance'>{sign}${Math.abs(totalBalance)}</h1>
        </div>
    )
}
