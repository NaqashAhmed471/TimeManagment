import React, { useState } from "react";
import allActions from "../../Redux";
import { useDispatch } from "react-redux";
import style from "./Login.module.css";

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
  // Register Form
  const [signUp, setSignUp] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const signUpChange = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };
  const signUpHandler = (e) => {
    e.preventDefault();
    dispatch(allActions.signUpAction.signUpData(signUp));
  };
  // Card Rotations
  const [card, setCard] = useState(true);
  const openRegister = () => {
    setCard(!card);
  };
  const openLogin = () => {
    setCard(!card);
  };
  return (
    <div className={style.form_wrapper}>
      <div className={style.card}>
        <div
          className={card ? `${style.inner_box_rotate}` : `${style.inner_box}`}
        >
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
            <button type="button" className={style.btn} onClick={openRegister}>
              I'm New Here
            </button>
            <a href="#/">Forgot Password</a>
          </div>
          <div className={style.card_back}>
            <h2>REGISTER</h2>
            <form>
              <input
                type="text"
                name="firstName"
                value={signUp.firstName}
                onChange={signUpChange}
                className={style.input_box}
                placeholder="Firstname"
              />
              <input
                type="text"
                name="lastName"
                value={signUp.lastName}
                onChange={signUpChange}
                className={style.input_box}
                placeholder="Lastname"
              />
              <input
                type="email"
                name="email"
                value={signUp.email}
                onChange={signUpChange}
                className={style.input_box}
                placeholder="Your Email Id"
                required
              />
              <input
                type="password"
                name="password"
                value={signUp.password}
                onChange={signUpChange}
                className={style.input_box}
                placeholder="Password"
                required
              />
              <input
                type="password"
                name="password_confirmation"
                value={signUp.password_confirmation}
                onChange={signUpChange}
                className={style.input_box}
                placeholder="Conform Password"
                required
              />
              <button
                type="submit"
                className={style.submit_btn}
                onClick={signUpHandler}
              >
                Submit
              </button>
              <input type="checkbox" />
              <span>Remember Me</span>
            </form>
            <button type="button" className={style.btn} onClick={openLogin}>
              I've an account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
