import React, { createContext, useReducer } from 'react';
import reducer from './reducer';

//Initial State
const initialState = {
    transactions: [

    ]
};

// Create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) =>
{
    const [state, dispatcher] = useReducer(reducer, initialState);
    function deleteTransaction(id)
    {
        dispatcher({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    function addTransaction(transaction)
    {
        dispatcher({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }
    return (
        <GlobalContext.Provider value={{ transactions: state.transactions, deleteTransaction, addTransaction }}>
            {/* //extract transaction array from state and store on transactions object */}
            {children}
        </GlobalContext.Provider>
    );
}
