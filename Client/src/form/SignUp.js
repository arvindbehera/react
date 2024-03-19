import react, { useEffect, useReducer, useState } from "react";
import useForm from "./useForm";

function Signup() {
  const { initialstate, error, handleChange, handleError } = useForm();
  const handleSubmit = (e) => {
    handleError();
    console.log(initialstate.username);
  };
  return (
    <div>
      <h1>Signup Page</h1>
      <input
        type="text"
        name="username"
        value={initialstate.username}
        onChange={handleChange}
      />
      {error ? <h3>Username is required</h3> : null}

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Signup;
