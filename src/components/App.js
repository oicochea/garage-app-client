import React from "react";
import Dashboard from "../pages/Dashboard.jsx";
import Home from "../pages/Home.jsx"
import Auth from "../pages/Auth.jsx"
import {Switch, Route } from "react-router-dom"
import Nav from "./Nav.jsx"

export const App = (props) => {
  return(
  <>
  <Nav/>
  <Switch>
    <Route exact path = "/" component={Home}/>
    <Route exact path = "/auth/:form" component={Auth}/>
    <Route exact path = "/dashboard" component={Dashboard}/>
  </Switch>
  </>);
  
};

export default App