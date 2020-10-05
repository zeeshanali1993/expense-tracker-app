import React, { useContext } from 'react';
import { GlobalContext } from '../statehandlers/globalstate';

export const Incomeexpense = () =>
{
    const { transactions } = useContext(GlobalContext);
    const incomeExpense = transactions.map(allTransactions => allTransactions.amount);

    const income = incomeExpense.reduce((accumulator, currentValue) => (currentValue >= 0 ? accumulator + currentValue : accumulator + 0), 0);

    const expense = incomeExpense.reduce((accumulator, currentValue) => (currentValue < 0 ? accumulator + currentValue : accumulator + 0), 0);

    return (
        <div className='inc-exp-container'>
            <div>
                <h4>income</h4>
                <p id='money-plus' className='money plus'>+${income}</p>
            </div>
            <div>
                <h4>expense</h4>
                <p id='money-minus' className='money minus'>-${Math.abs(expense)}</p>
            </div>
        </div>
    );
}
