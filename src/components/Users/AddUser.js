import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "./../UI/Button";
import "./AddUser.css";
import ErrorModal from "./../UI/ErrorModal";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(false);
  const addUserHandler = (event) => {
    event.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please fill both of the inputs",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid Age",
        message: "Please insert a valid age",
      });
      return;
    }
    props.onAddUser({
      name,
      age,
      id: Math.random().toString(),
    });
    setAge("");
    setName("");
  };
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onDismiss={() => {
            setError(null);
          }}
        />
      )}
      <Card className="input">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            value={name}
            id="username"
            type="text"
            onChange={nameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            value={age}
            id="age"
            type="number"
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
