import React from "react";
import "./App.css";
import Login from "./components/LoginForm";
import { Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import CreateUser from "./Pages/CreateUser";
import ManagerDashBoard from "./Pages/mangerDashboard";
import AdminDashBoard from "./Pages/adminDashboard";
import UserDashBoard from "./Pages/userDashboard";
import { useSelector } from "react-redux";

function App() {
  const isLogged = useSelector((state) => state.loginReducer.isLoggedIn);
  console.log("isLogged", isLogged);
  const role = useSelector(
    (state) => state?.loginReducer?.login?.user?.roles[0]?.name
  );
  console.log("Roleapp", role);

  return (
    <div className="app">
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/admindashboard" component={AdminDashBoard} />
        <Route path="/managerdashboard" component={ManagerDashBoard} />
        <Route path="/userdashboard" component={UserDashBoard} />
        <Route path="/createuser" component={CreateUser} />
      </Switch>
    </div>
  );
}

export default App;
