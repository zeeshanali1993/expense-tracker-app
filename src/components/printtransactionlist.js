import React, { useContext } from 'react';
import { Transactionlist } from './transactionlist';
import { GlobalContext } from '../statehandlers/globalstate';

export const Printtransactions = ({ x }) =>
{
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = x.amount < 0 ? '-' : '+';
    return (
        < li id={x.id} className={x.amount >= 0 ? 'plus' : 'minus'}>
            {x.text}<span span > {sign}${Math.abs(x.amount)}</span> <button onClick={() =>
            {
                deleteTransaction(x.id)
            }
            } className='delete-btn'>x</button>
        </li >
    );
}

// < li id={x.id} className={x.amount >= 0 ? 'plus' : 'minus'}>
// {x.text}<span span > {sign}${Math.abs(x.amount)}</span> <button onClick={() =>
// {
//     const elementId = document.getElementById(x.id);
//     elementId.remove();
// }
// } className='delete-btn'>x</button>
// </li >