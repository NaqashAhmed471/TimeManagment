import React, { useState } from "react";
import allActions from "../../Redux";
import { useDispatch } from "react-redux";
import style from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  // Login Form
  const [login, setLogin] = useState({ email: "", password: "" });
  const loginChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(allActions.loginAction.postData(login));
  };
  return (
    <div className={style.form_wrapper}>
      <div className={style.card}>
        <div className={style.inner_box_rotate}>
          <div className={style.card_front}>
            <h2>LOGIN</h2>
            <form>
              <input
                type="email"
                name="email"
                value={login.email}
                onChange={loginChange}
                className={style.input_box}
                placeholder="Your Email Id"
                required
              />
              <input
                type="password"
                name="password"
                value={login.password}
                onChange={loginChange}
                className={style.input_box}
                placeholder="Password"
                required
              />
              <button
                type="submit"
                className={style.submit_btn}
                onClick={loginHandler}
              >
                Submit
              </button>
              <input type="checkbox" />
              <span>Remember Me</span>
            </form>
            <Link to="/signup">
              {" "}
              <button type="button" className={style.btn}>
                I'm New Here
              </button>{" "}
            </Link>
            <a href="#/">Forgot Password</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
