import React from 'react';
import { Transactionlist } from './transactionlist';

export const Printtransactions = ({ x }) =>
{
    return (
        < li className={x.amount >= 0 ? 'plus' : 'minus'}>
            {x.text}<span span > ${x.amount}</span> <button className='delete-btn'>x</button>
        </li >
    );
}
