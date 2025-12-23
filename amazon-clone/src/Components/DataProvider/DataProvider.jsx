

import React,{createContext, useReducer} from "react";
import { initialState, Reducer } from "../../Utility/Reducer";



export const DataContext = createContext()

export const DataProvider =({children})=>{
    return (
        <DataContext.Provider value={useReducer(Reducer,initialState)}>
                {children}
        </DataContext.Provider>
    )
}

// Reducer, initialState;