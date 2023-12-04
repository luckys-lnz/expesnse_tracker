import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';

const initialState = {
    transactions: []
}

// creating context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions to update
    function delTransaction (id) {
        dispatch({
            type: 'del_Transaction',
            payload: id
        });
    }

    function addTransaction (transaction) {
        dispatch({
            type: 'add_Transaction',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        delTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}