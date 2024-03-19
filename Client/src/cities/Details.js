/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable no-global-assign */
/* eslint-disable no-undef */
import { useEffect, useRef, useState } from "react";
import { Table } from "react-bootstrap";

function Details() {
  const [cities, setCities] = useState([]);
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [nameId, setNameId] = useState(null);

  const getCities = async () => {
    let resp = await fetch("http://localhost:8000/cities");
    let data = await resp.json();
    setCities(data);
  };

  useEffect(() => {
    getCities();
  }, []);

  const handleDelete = async (id) => {
    let resp = await fetch(`http://localhost:8000/cities/${id}`, {
      method: "DELETE",
    });
  };

  const handleEdit = (id) => {
    let data = cities[id - 1];
    setName(data.name);
    setState(data.state);
    setCountry(data.country);
    setNameId(id);
  };

  const handleUpdate = async () => {
    let data = { name, state, country, nameId };
    let resp = await fetch(`http://localhost:8000/cities/${nameId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <div>
      <h2>Details</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>No</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city) => (
            <tr key={city.id}>
              <td>{city.id}</td>
              <td>{city.name}</td>
              <td>{city.state}</td>
              <td>{city.country}</td>
              <td>
                <button onClick={() => handleDelete(city.id)}>Delele</button>
                <button onClick={() => handleEdit(city.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h3>Updates</h3>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="state"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <input
        type="text"
        name="country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default Details;
