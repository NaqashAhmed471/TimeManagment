import React, { useState, useEffect } from "react";
import allActions from "../../../Redux";
import { useSelector, useDispatch } from "react-redux";
import styles from "./UserDashboardUi.module.css";

const UserDashboardUi = () => {
  const [hamburg, setHamburg] = useState(false);
  const [userRecord, setUserRecord] = useState({
    logDate: "",
    hours: "",
    description: "",
  });

  const handleChange = (e) => {
    setUserRecord({ ...userRecord, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(allActions?.createWorkLogAction?.createWorkLogData(userRecord));
  };
  useEffect(() => {
    dispatch(allActions.getUserLogAction.getUserLogData());
  }, []);
  const logUsers = useSelector(
    (state) => state?.getUserLogReducer?.logUserData?.workLogs?.data
  );
  console.log("logUsers", logUsers);

  const clickHandler = () => {
    if (hamburg === false) {
      setHamburg(true);
    } else {
      setHamburg(false);
    }
  };

  return (
    <div className={styles.dashboard_wrapper}>
      <div className={styles.navbar_wrapper}>
        <div className={styles.logo_wrapper}>
          <h2>Dashboard</h2>
        </div>
        <div className={styles.menuItem_wrapper}>
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
      <div className={styles.form_wrapper}>
        <h3>Add Record Here</h3>
        <form onSubmit={submitHandler}>
          <input
            type="date"
            placeholder="Add Date"
            name="logDate"
            value={userRecord.logDate}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Add Hours"
            name="hours"
            value={userRecord.hours}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Add Description"
            name="description"
            value={userRecord.description}
            onChange={handleChange}
          />
          <button className={styles.create_btn}>Add Record</button>
        </form>
      </div>
      <div>
        <div className="row justify-content-center">
          <div className="col-8">
            <table className="table">
              <thead className={styles.thead}>
                <tr className="text-center">
                  <th scope="col">#</th>
                  <th scope="col">Log Date</th>
                  <th scope="col">Hours</th>
                  <th scope="col">Description</th>
                  <th scope="col">Action</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {logUsers?.map((value, index) => {
                  return (
                    <tr className="text-center" key={index}>
                      <td>{value.id}</td>
                      <td>{value.log_date}</td>
                      <td>{value.hours}</td>
                      <td>{value.description}</td>
                      <td>
                        <button className="edit-button">Edit</button>
                      </td>

                      <td>
                        <button className="delete-button">Delete</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardUi;
