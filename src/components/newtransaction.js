import React, { useContext, useState } from 'react';
import { GlobalContext } from '../statehandlers/globalstate';

export const Newtransaction = () =>
{
    const { addTransaction } = useContext(GlobalContext);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    // function generateID()
    // {
    //     return Math.floor((Math.random() * 10000000));
    // }
    const submitTransaction = (event) =>
    {
        event.preventDefault();
        const newTansaction = {
            id: Math.floor((Math.random() * 10000000)),
            text,
            amount: +amount
        }
        console.log(newTansaction)
        addTransaction(newTansaction);

    }
    return (
        <div>
            <h3>Add new transaction</h3>
            <div>
                <form id='form' onSubmit={submitTransaction}>
                    <div className='form-control'>
                        <label for='text'>Note</label>
                        <input type='text' value={text} onChange={(event) => setText(event.target.value)} placeholder='Enter transaction detail...' required autoFocus />
                    </div>
                    <div className='form-control'>
                        <label for='number'>Amount<br />(Expense -Amount, Income +Amount)</label>
                        <input type='number' value={amount} onChange={(event) => setAmount(event.target.value)} placeholder='Enter transaction amount...' required />
                    </div>
                    <button className='btn'>add transaction</button>
                </form>

            </div>
        </div>
    )
}
