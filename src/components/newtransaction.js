import React from 'react'

export const Newtransaction = () =>
{
    return (
        <div>
            <h3>Add new transaction</h3>
            <div>
                <form id='form'>
                    <div className='form-control'>
                        <label for='text'>Note</label>
                        <input type='text' placeholder='Enter transaction detail...' required autoFocus />
                    </div>

                </form>

                <form id='form'>
                    <div className='form-control'>
                        <label for='number'>Amount<br />(Expense -Amount, Income +Amount)</label>
                        <input type='number' placeholder='Enter transaction amount...' required />
                    </div>

                </form>
                <button className='btn' ti>add transaction</button>
            </div>
        </div>
    )
}
