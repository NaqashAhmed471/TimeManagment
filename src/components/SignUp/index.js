import React, { useState } from "react";
import allActions from "../../Redux";
import { useDispatch } from "react-redux";
import style from "./SignUp.module.css";
import { Link } from "react-router-dom";

const SignUp = () => {
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
  const dispatch = useDispatch();
  const signUpHandler = (e) => {
    e.preventDefault();
    dispatch(allActions.signUpAction.signUpData(signUp));
  };
  return (
    <div className={style.form_wrapper}>
      <div className={style.card}>
        <div className={style.inner_box}>
          <div className={style.card_back}>
            <h2>REGISTER</h2>
            <form onSubmit={signUpHandler}>
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
              <button type="submit" className={style.submit_btn}>
                Submit
              </button>
              <input type="checkbox" />
              <span>Remember Me</span>
            </form>
            <Link to="/">
              {" "}
              <button type="button" className={style.btn}>
                I've an account
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
