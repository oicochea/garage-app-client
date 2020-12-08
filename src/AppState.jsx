import React, { useContext, useReducer } from "react"


/////////
//Initial state - 
///////

const initialState = {
    url : "http://oc-garage-app-backend.herokuapp.com"
}



//////
//Reducer 
//////
//action = {type: 'action', payload (what we need)--}
const reducer = (state,action) => {

    switch(action.type){
        default:
            return state
    }

}
/////////
////APpCOntext
/////

const AppContext = React.createContext(null)


/////
//App State Component
/////

export const AppState = (props) =>{

    const[ state, dispatch] = useReducer(reducer, initialState)

    return <AppContext.Provider value ={{ state, dispatch}}>{props.children}</AppContext.Provider>;
};


//hook- useAppState

 export const useAppState = ()=>{
    return React.useContext(AppContext)
}


