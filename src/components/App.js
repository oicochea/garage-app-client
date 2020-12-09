import React from "react";
import Dashboard from "../pages/Dashboard.jsx";
import Home from "../pages/Home.jsx"
import Auth from "../pages/Auth.jsx"
import {Switch, Route } from "react-router-dom"
import Nav from "./Nav.jsx"
import {useAppState} from "../AppState.jsx"

export const App = (props) => {

  const {state, dispatch} = useAppState()
  React.useState(()=>{
    const auth = JSON.parse(window.localStorage.getItem("auth"))
    if (auth){
      dispatch({type: "auth", payload: "auth"})
      props.history.push("/dashboard")
    }else{
      window.location.push("/")
    }
  },[])

  return(
  <>
  <Route path = "/" component={Nav}/>
  <Switch>
    <Route exact path = "/" component={Home}/>
    <Route exact path = "/auth/:form" component={Auth}/>
    <Route exact path = "/dashboard" component={Dashboard}/>
  </Switch>
  </>);
  
};

export default App