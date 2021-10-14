import React, { useState, useEffect } from "react";
import styles from "./AdminDashboardUi.module.css";
import allActions from "../../../Redux";
import { useSelector, useDispatch } from "react-redux";
import { Link} from "react-router-dom";
var updateId = 0;

const AdminDashboardUi = () => {
  // States
  const [hamburg, setHamburg] = useState(false);
  const [state, setState] = useState("");
  const [update, setUpdate] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  //Selector for GetUserReducer
  const users = useSelector(
    (state) => state?.getUserReducer?.userData?.users?.data
  );

  // Dispatch GetUserAction
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allActions.getUserAction.getUserData());
    // eslint-disable-next-line
  }, [state]);

  // OnChangeUpdateHandler
  const updateHandlerChange = (e) => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };
  // editHandler
  const editHandler = (id) => {
    updateId = id;
    const specificUser = users.filter((arr) => {
      return arr.id === updateId;
    });
    setUpdate({
      firstName: specificUser[0].firstName,
      lastName: specificUser[0].lastName,
      email: specificUser[0].email,
    });
    updateId = id;
    console.log("Specific dattaaaaaaaa", specificUser);
  };

  // updateHandler
  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(allActions.updateUserAction.updateUserData(updateId, update));
    setState(updateId);
    setUpdate({ firstName: "", lastName: "", email: "" });
  };

  const clickHandler = () => {
    if (hamburg === false) {
      setHamburg(true);
    } else {
      setHamburg(false);
    }
  };

  // DeleteUser
  const deleteHandler = (id) => {
    dispatch(allActions.deleteUserAction.deleteUser(id));
    setState(id);
  };
  // LogOut
  const logoutHandler = () => {
    localStorage.clear();
  };

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
      <div className={styles.filtring_wrapper}></div>
      <div>
        <div className={styles.form_wrapper}>
          <div className={styles.card}>
            <div className={styles.inner_box}>
              <div className={styles.card_back}>
                <h2>UPDATE</h2>
                <form onSubmit={updateHandler}>
                  <input
                    type="text"
                    name="firstName"
                    value={update.firstName || ""}
                    onChange={updateHandlerChange}
                    className={styles.input_box}
                    placeholder="Firstname"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={update.lastName || ""}
                    onChange={updateHandlerChange}
                    className={styles.input_box}
                    placeholder="Lastname"
                  />
                  <input
                    type="email"
                    name="email"
                    value={update.email || ""}
                    onChange={updateHandlerChange}
                    className={styles.input_box}
                    placeholder="Your Email Id"
                    required
                  />
                  <button type="submit" className={styles.submit_btn}>
                    Update
                  </button>
                  <input type="checkbox" />
                  <span>Remember Me</span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                return (
                  <tbody key={index}>
                    <tr className="text-center">
                      <td>{user.id}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                      <td>{user.roles[0].name}</td>
                      <td>
                        <button
                          className="edit-button"
                          onClick={() => editHandler(user.id)}
                        >
                          Edit
                        </button>
                      </td>

                      <td>
                        <button
                          className="delete-button"
                          onClick={() => deleteHandler(user.id)}
                        >
                          Delete
                        </button>
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
