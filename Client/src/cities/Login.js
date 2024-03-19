/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable no-global-assign */
/* eslint-disable no-undef */
import { useEffect, useState } from "react";

function Login() {
  const [details, setDetails] = useState({
    name: "",
    state: "",
    country: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  console.log(details);

  const handleSubmit = async () => {
    let name = details.name;
    let state = details.state;
    let country = details.country;
    let data = { name, state, country };
    const resp = await fetch("http://localhost:8000/cities", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await resp.json();
    console.log(result);
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        name="name"
        value={details.name}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name="state"
        value={details.state}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name="country"
        value={details.country}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;
