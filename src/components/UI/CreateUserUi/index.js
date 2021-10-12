import React from "react";
import style from "./CreateUserUi.module.css";

const CreateUserUi = ({ createData, onChangeHandler, onSubmitHandler }) => {
  return (
    <div className={style.form_wrapper}>
      <div className={style.card}>
        <div className={style.inner_box}>
          <div className={style.card_back}>
            <h2>CREATE USER</h2>
            <form onSubmit={onSubmitHandler}>
              <input
                type="text"
                name="firstName"
                value={createData.firstName}
                onChange={onChangeHandler}
                className={style.input_box}
                placeholder="Firstname"
              />
              <input
                type="text"
                name="lastName"
                value={createData.lastName}
                onChange={onChangeHandler}
                className={style.input_box}
                placeholder="Lastname"
              />
              <input
                type="email"
                name="email"
                value={createData.email}
                onChange={onChangeHandler}
                className={style.input_box}
                placeholder="Your Email Id"
                required
              />
              <input
                type="password"
                name="password"
                value={createData.password}
                onChange={onChangeHandler}
                className={style.input_box}
                placeholder="Password"
                required
              />
              <input
                type="password"
                name="password_confirmation"
                value={createData.password_confirmation}
                onChange={onChangeHandler}
                className={style.input_box}
                placeholder="Conform Password"
                required
              />
              <input
                type="text"
                name="userType"
                value={createData.userType}
                onChange={onChangeHandler}
                className={style.input_box}
                placeholder="UserType"
                disabled
              />
              <button type="submit" className={style.submit_btn}>
                Submit
              </button>
              <input type="checkbox" />
              <span>Remember Me</span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUserUi;
