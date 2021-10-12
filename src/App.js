import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";
import Login from "./components/LoginForm";
import { Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import CreateUser from "./Pages/CreateUser";
import ManagerDashBoard from "./Pages/mangerDashboard";
import AdminDashBoard from "./Pages/adminDashboard";
import UserDashBoard from "./Pages/userDashboard";
// import { useSelector, useDispatch } from "react-redux";
// import allActions from "./Redux";

function App() {
  // const isLogged = useSelector((state) => state.loginReducer.isLoggedIn);
  // console.log("////", isLogged);
  // const manager = useSelector(
  //   (state) => state.loginReducer.login.user.roles[0].name
  // );
  // console.log("////", manager);

  return (
    <div className="app">
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/admindashboard" exact component={AdminDashBoard} />
        <Route path="/managerdashboard" exact component={ManagerDashBoard} />
        <Route path="/userdashboard" exact component={UserDashBoard} />
        <Route path="/createuser" exact component={CreateUser} />
      </Switch>
    </div>
  );
}

export default App;
