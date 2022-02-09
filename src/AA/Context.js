// import { createContext } from "react";

import React from "react"



// export const userContext=createContext()

const GlobalContext = React.createContext()

function stateReducer(state, action) {
    if(action.type==="firstName"){
    //   return  state.firstName=action.payload
      return {...state,firstName: action.payload}
    }
    if(action.type==="lastName"){
        // return state.lastName=action.payload
        return {...state,lastName: action.payload}
    }
    if(action.type==="addressOne"){
        return {...state,addressOne:action.payload}
    }
    if(action.type==="addressTwo"){
        return {...state,addressTwo:action.payload}
    }
    if(action.type==="addressThree"){
        return {...state,addressThree:action.payload}
    }
 
}

function StateProvider({children}) {
  const [state, dispatch] = React.useReducer(stateReducer, {})
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = {state, dispatch}
  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}
function useCount() {
    const context = React.useContext(GlobalContext)
    if (context === undefined) {
      throw new Error('useCount must be used within a CountProvider')
    }
    return context
  }

export {StateProvider,useCount}