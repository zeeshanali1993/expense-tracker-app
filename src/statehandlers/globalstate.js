import React, { createContext, useReducer } from 'react';
import reducer from './reducer';

//Initial State
const initialState = {
    transactions: [
        {
            id: 1, text: 'Flower', amount: -20
        },
        {
            id: 2, text: 'Book', amount: 300
        },
        {
            id: 3, text: 'Mobile', amount: -10
        },
        {
            id: 4, text: 'Lottery', amount: 150
        }
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
    return (
        <GlobalContext.Provider value={{ transactions: state.transactions, deleteTransaction }}>
            {/* //extract transaction array from state and store on transactions object */}
            {children}
        </GlobalContext.Provider>
    );
}
