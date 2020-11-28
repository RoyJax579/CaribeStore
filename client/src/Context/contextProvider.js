import React, { useReducer } from "react"
import Reducer, { initialState } from "./Reducers/Reducer";
const { createContext } = require("react");

export const context = createContext()


const ContextProvider = (props) => {
    const [state, dispatch] = useReducer(Reducer, initialState)
    const value = {state, dispatch}

    return (
        <context.Provider value={value}>
            {props.children}
        </context.Provider>
    )
}

export default ContextProvider