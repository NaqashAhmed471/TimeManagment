import React, { useState, useEffect } from "react";
import styles from "./AdminDashboardUi.module.css";
import allActions from "../../../Redux";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const AdminDashboardUi = () => {
  const [hamburg, setHamburg] = useState(false);

  const clickHandler = () => {
    if (hamburg === false) {
      setHamburg(true);
    } else {
      setHamburg(false);
    }
  };
  const users = useSelector(
    (state) => state?.getUserReducer?.userData?.users?.data
  );
  console.log("AdminUsers", users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allActions.getUserAction.getUserData());
  }, []);

  return (
    <div className={styles.dashboard_wrapper}>
      <div className={styles.navbar_wrapper}>
        <div className={styles.logo_wrapper}>
          <h2>Dashboard</h2>
        </div>
        <div className={styles.menuItem_wrapper}>
          <Link to="/signup">
            {" "}
            <button className={styles.create_btn}>Create Manager</button>{" "}
          </Link>
          <Link to="/createuser">
            <button className={styles.create_btn}>Create User</button>
          </Link>
          <button className={styles.logout_btn}>Log Out</button>
          <button className={styles.humberg_button} onClick={clickHandler}>
            <span
              className={
                hamburg === false ? `${styles.topbar}` : `${styles.topbarcross}`
              }
            ></span>
            <span
              className={
                hamburg === false ? `${styles.midbar}` : `${styles.midbarcross}`
              }
            ></span>
            <span
              className={
                hamburg === false
                  ? `${styles.bottombar}`
                  : `${styles.bottombarcross}`
              }
            ></span>
          </button>
          {hamburg === true ? (
            <div className={styles.absolute_wrapper}>
              <div className={styles.absolute_wrapper_items}>
                <p>Dashboard</p>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className={styles.filtring_wrapper}></div>
      <div>
        <div className="row justify-content-center">
          <div className="col-8">
            <h3 className="text-center mb-4">List</h3>
            <table className="table">
              <thead className={styles.thead}>
                <tr className="text-center">
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Action</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              {users?.map((user, index) => {
                // console.log("roles", user.roles[0].name);
                return (
                  <tbody key={index}>
                    <tr className="text-center">
                      <td>{user.id}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                      <td>{user.roles[0].name}</td>
                      <td>
                        <button className="edit-button">Edit</button>
                      </td>

                      <td>
                        <button className="delete-button">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardUi;
