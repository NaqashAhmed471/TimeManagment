import React, { useState, useEffect } from "react";
import allActions from "../../../Redux";
import { useSelector, useDispatch } from "react-redux";
import styles from "./UserDashboardUi.module.css";
import { Link } from "react-router-dom";
var updateId = 0;

const UserDashboardUi = () => {
  const [hamburg, setHamburg] = useState(false);
  const [state, setState] = useState(false);
  const [hours, setHours] = useState(8);
  const [userRecord, setUserRecord] = useState({
    logDate: "",
    hours: "",
    description: "",
  });
  const [update, setUpdate] = useState({
    logDate: "",
    hours: "",
    description: "",
  });
  // Selector of getuserlog
  const logUsers = useSelector(
    (state) => state?.getUserLogReducer?.logUserData?.workLogs?.data
  );


  // dispatch createuserlog
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(allActions.createWorkLogAction.createWorkLogData(userRecord));
    setUserRecord({ logDate: "", hours: "", description: "" });
    setState(true);
  };
  // dispatch getuserlog
  useEffect(() => {
    dispatch(allActions.getUserLogAction.getUserLogData());
    // eslint-disable-next-line
  }, [state]);

  const handleChange = (e) => {
    setUserRecord({ ...userRecord, [e.target.name]: e.target.value });
  };

  // OnChangeUpdateHandler
  const updateHandlerChange = (e) => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };
  // editHandler
  const editHandler = (id) => {
    updateId = id;
    const specificUser = logUsers.filter((arr) => {
      return arr.id === updateId;
    });
    setUpdate({
      logDate: specificUser[0].logDate,
      hours: specificUser[0].hours,
      description: specificUser[0].description,
    });
    updateId = id;
  };

  // updateHandler
  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(allActions.updateLogAction.updateLogData(updateId, update));
    setState(updateId);
    setUpdate({ logDate: "", hours: "", description: "" });
  };
  // Logout
  const logoutHandler = () => {
    localStorage.clear();
  };

  // OnchangeprefferedHoursHandler
  const prefferedHoursHandler = (e) => {
    setHours(e.target.value);
  };
  // Selector of userId
  const userLogId = useSelector(
    (state) => state?.loginReducer?.login?.user?.id
  );

  //  setHoursSubmitHandler
  const setHoursSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(allActions.updateWorkingHourAction.hoursData(hours, userLogId));
  };

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
          <Link to="/">
            <button className={styles.logout_btn} onClick={logoutHandler}>
              Log Out
            </button>
          </Link>
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
      <div className={styles.prefferedHours}>
        <h4>Preffered Working Hours</h4>
        <div className={styles.hoursFormWrapper}>
          <form onSubmit={setHoursSubmitHandler}>
            <input
              type="text"
              value={hours}
              onChange={prefferedHoursHandler}
              className={styles.hours_input}
            />
            <button className={styles.hours_btn}>Set Hours</button>
          </form>
        </div>
      </div>
      <div className={styles.form_wrapper}>
        <div className={styles.card}>
          <div className={styles.inner_box}>
            <div className={styles.card_back}>
              <h2>Add Record Here</h2>
              <form onSubmit={submitHandler}>
                <input
                  type="date"
                  placeholder="Add Date"
                  name="logDate"
                  value={userRecord.logDate}
                  onChange={handleChange}
                  className={styles.input_box}
                />
                <input
                  type="number"
                  placeholder="Add Hours"
                  name="hours"
                  value={userRecord.hours}
                  onChange={handleChange}
                  className={styles.input_box}
                />
                <input
                  type="text"
                  placeholder="Add Description"
                  name="description"
                  value={userRecord.description}
                  onChange={handleChange}
                  className={styles.input_box}
                />
                <button type="submit" className={styles.submit_btn}>
                  Add Record
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.form_wrapper}>
        <div className={styles.card}>
          <div className={styles.inner_box}>
            <div className={styles.card_back}>
              <h2>UPDATE</h2>
              <form onSubmit={updateHandler}>
                <input
                  type="date"
                  name="logDate"
                  value={update.logDate || ""}
                  onChange={updateHandlerChange}
                  className={styles.input_box}
                  placeholder="Add Date"
                />
                <input
                  type="number"
                  name="hours"
                  value={update.hours || ""}
                  onChange={updateHandlerChange}
                  className={styles.input_box}
                  placeholder="Add Hours"
                />
                <input
                  type="text"
                  name="description"
                  value={update.description || ""}
                  onChange={updateHandlerChange}
                  className={styles.input_box}
                  placeholder="Description"
                  required
                />
                <button type="submit" className={styles.submit_btn}>
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
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
                </tr>
              </thead>
              <tbody>
                {logUsers?.map((value, index) => {
                  return (
                    <tr
                      className="text-center"
                      key={index}
                      style={{
                        backgroundColor: value.hours >= hours ? "green" : "red",
                      }}
                    >
                      <td>{value.id}</td>
                      <td>{value.log_date}</td>
                      <td>{value.hours}</td>
                      <td>{value.description}</td>
                      <td>
                        <button
                          className="edit-button"
                          onClick={() => editHandler(value.id)}
                        >
                          Edit
                        </button>
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
