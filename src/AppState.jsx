import React, { useContext, useReducer } from "react"


/////////
//Initial state - 
///////

const initialState = {
    url : "http://oc-garage-app-backend.herokuapp.com",
    token: null,
    username:null
}



//////
//Reducer 
//////
//action = {type: 'action', payload (what we need)--}
const reducer = (state,action) => {

    let newState;
    switch (action.type){
        case "auth":
        newState = {...state,...action.payload};
        return newState;
        break;
        case "logout":
        newState = {...state , token:null , usernmae:null}
        window.localStorage.removeItem("auth")
        return newState;
        default:
            return state;
        break
    }
}
    // switch(action.type){
    //     case"signup":
    //     fetch(state.url + "/users/" , {
    //         method:"post",
    //         headers: {
    //             "content-Type": "application/json"
    //         },
    //         body: JSON.stringify(action.payload)
    //     })
    //     .then(Response => Response.json())
    //     .then(user => {
    //         return{
    //             ...state,
    //             token: user.token,
    //             username: user.username,
    //         }
    //     });
    //     break
    //     case"login":
    //     fetch(state.url + "/login/" , {
    //         method:"post",
    //         headers: {
    //             "content-Type": "application/json"
    //         },
    //         body: JSON.stringify(action.payload)
    //     })
    //     .then(Response => Response.json())
    //     .then(user => {
    //         return{
    //             ...state,
    //             token: user.token ,
    //             username: user.username,
    //         }
    //     })
    //     break
    //     default:
    //         return state
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


