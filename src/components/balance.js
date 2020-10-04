import React, { useContext, useReducer } from 'react';
// // import reducer from '../statehandlers/reducer';
// import { GlobalContext } from '../statehandlers/globalstate';

export const Balance = () =>
{
    return (
        <div className='container'>
            <h4>Your balance</h4>
            <h1 id='balance'>$0.00</h1>
        </div>
    )
}
