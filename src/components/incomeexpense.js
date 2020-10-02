import React from 'react'

export const Incomeexpense = () =>
{
    return (
        <div className='inc-exp-container'>
            <div>
                <h4>income</h4>
                <p id='money-plus' className='money plus'>+$0.00</p>
            </div>
            <div>
                <h4>expense</h4>
                <p id='money-minus' className='money minus'>-$0.00</p>
            </div>
        </div>
    )
}
