// import React from 'react';

export default (state, action) =>
{
    console.log(state);
    switch (action.type)
    {
        case 'DELETE_TRANSACTION':
            return ({
                // ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            })
        case 'ADD_TRANSACTION':
            return ({
                transactions: [action.payload, ...state.transactions]
            })
        default:
            return state;
    }
}
