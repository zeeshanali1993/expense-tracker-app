import React, { useContext } from 'react';
import { GlobalContext } from '../statehandlers/globalstate';
import { Printtransactions } from './printtransactionlist';

export const Transactionlist = () =>
{
    const { transactions } = useContext(GlobalContext);
    return (
        <>
            <h3> History</h3>
            <ul id='list' className='list'>
                {transactions.map(x => <Printtransactions key={x.id} x={x} />)}
            </ul>
        </>
    )
}
