import { useEffect, useReducer, useRef, useState } from "react";
import { useFetch } from "./useFetch";
import { useForm } from "./form23/useForm";
import "./App.css";
import { Button } from "react-bootstrap";
import errors from "./form23/errors";

function App() {
  const { initialState, handleChange, handleSubmit, errMsg } = useForm(
    submit,
    errors
  );

  function submit(e) {
    console.log("success");
  }

  return (
    <div className="App">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={initialState.username}
          onChange={handleChange}
        />
        {errMsg.username && <h3>{errMsg.username}</h3>}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={initialState.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={initialState.password}
          onChange={handleChange}
        />
        <label htmlFor="cnfPassword">Re-enter Pass</label>
        <input
          type="password"
          id="cnfPassword"
          name="cnfPassword"
          value={initialState.cnfPassword}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
