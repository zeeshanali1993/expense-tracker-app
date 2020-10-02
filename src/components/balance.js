import React, { useContext } from 'react';
import userBalanceContext from '../statehandlers/globalstate';

export const Balance = () =>
{
    let userBalance = useContext(userBalanceContext);
    console.log(userBalance);
    return (
        <div className='container'>
            <h4>Your balance</h4>
            <h1 id='balance'>${userBalance[0]}</h1>
        </div>
    )
}
