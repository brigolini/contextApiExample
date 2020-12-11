import React, {Dispatch, useReducer} from "react";
import {AppState, initialState, reducer} from "./Reducer";


const AppContext = React.createContext([initialState, value => {}])


const AppProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <><AppContext.Provider value={[state, dispatch]}>{props.children}</AppContext.Provider></>
}

function useAppContext() {
    const context = React.useContext(AppContext)
    if (context === undefined) throw new Error(`Você não pode utilizar o estado global fora de um contexto`)
    return context
}


export {AppProvider, useAppContext}
