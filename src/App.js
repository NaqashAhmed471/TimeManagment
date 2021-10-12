import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";
import Login from "./components/LoginForm";
import { Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import DashBoard from "./Pages/dashboard";
import CreateUser from "./Pages/CreateUser";
import { useSelector, useDispatch } from "react-redux";
import allActions from "./Redux";

function App() {
  const isLogged = useSelector((state) => state.loginReducer.isLoggedIn);
  console.log("////", isLogged);
  const manager = useSelector(
    (state) => state.loginReducer.login.user.roles[0].name
  );
  console.log("////", manager);
  const users = useSelector((state) => state.getUserReducer.userData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allActions.getUserAction.getUserData());
  }, []);
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/worklog" exact component={DashBoard} />
        <Route path="/createuser" exact component={CreateUser} />
      </Switch>
    </div>
  );
}

export default App;
