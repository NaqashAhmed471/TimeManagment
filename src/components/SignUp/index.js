import React, { useState } from "react";
import allActions from "../../Redux";
import { useDispatch } from "react-redux";
import style from "./SignUp.module.css";

const SignUp = () => {
  const [signUp, setSignUp] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const handleChange = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(allActions.signUpAction.signUpData(signUp));
  };
  return (
    <div className={style.form_wrapper}>
      <form onSubmit={handleSubmit}>
        <div className={style.form_inner}>
          <h2>Sign Up</h2>
          <div className={style.form_group}>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={signUp.firstName}
              onChange={handleChange}
            />
          </div>
          <div className={style.form_group}>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={signUp.lastName}
              onChange={handleChange}
            />
          </div>
          <div className={style.form_group}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={signUp.email}
              onChange={handleChange}
            />
          </div>
          <div className={style.form_group}>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={signUp.password}
              onChange={handleChange}
            />
          </div>
          <div className={style.form_group}>
            <label>Conform Password:</label>
            <input
              type="password"
              name="password_confirmation"
              value={signUp.password_confirmation}
              onChange={handleChange}
            />
          </div>
          <input type="submit" value="SignUp" />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
