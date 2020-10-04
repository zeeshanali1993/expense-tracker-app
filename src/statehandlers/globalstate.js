import React, { createContext, useReducer } from 'react';
import reducer from './reducer';

//Initial State
const initialState = {
    transactions: [
        {
            id: 1, text: 'Flower', amount: -20
        },
        {
            id: 2, text: 'Book', amount: 30
        },
        {
            id: 3, text: 'Mobile', amount: -300
        },
        {
            id: 4, text: 'Lottery', amount: 1000
        }
    ]
};

// Create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) =>
{
    const [state, dispatcher] = useReducer(reducer, initialState);
    return (
        <GlobalContext.Provider value={initialState}>
            {/* //extract transaction array from state and store on transactions object */}
            {children}
        </GlobalContext.Provider>
    );
}
