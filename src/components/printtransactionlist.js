import React from 'react';
import { Transactionlist } from './transactionlist';

export const Printtransactions = ({ x }) =>
{
    const sign = x.amount < 0 ? '-' : '+';
    return (
        < li className={x.amount >= 0 ? 'plus' : 'minus'}>
            {x.text}<span span > {sign}${Math.abs(x.amount)}</span> <button className='delete-btn'>x</button>
        </li >
    );
}
