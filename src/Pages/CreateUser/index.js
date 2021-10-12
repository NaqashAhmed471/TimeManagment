import React, { useState } from "react";
import { useDispatch } from "react-redux";
import allActions from "../../Redux";
import CreateUserUi from "../../components/UI/CreateUserUi";

const CreateUser = () => {
  const [createData, setCreateData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
    userType: "user",
  });

  const onChangeHandler = (e) => {
    setCreateData({
      ...createData,
      [e.target.name]: e.target.value,
    });
  };
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(allActions.createRegularUserAction.regularUserData(createData));
  };
  return (
    <CreateUserUi
      createData={createData}
      onChangeHandler={onChangeHandler}
      onSubmitHandler={onSubmitHandler}
    />
  );
};

export default CreateUser;
