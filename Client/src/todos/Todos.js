import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faEdit,
  faTrashAlt,
  faSort,
} from "@fortawesome/free-solid-svg-icons";

function Todos() {
  const [newTodos, setNewTodos] = useState("");
  const [todos, setTodos] = useState([]);
  const [currentId, setCurrentId] = useState(null);
  const [updateText, setUpdateText] = useState("");
  const [order, setOrder] = useState("INC");

  const handleAdd = () => {
    setTodos([...todos, newTodos]);
    setNewTodos("");
  };

  const handleEdit = (item, i) => {
    setCurrentId(i);
    setUpdateText(item);
  };
  const handleDelete = (i) => {
    let filtered = todos.filter((cv, id) => id !== i);
    setTodos(filtered);
  };

  const handleSave = () => {
    let updated = [...todos];
    updated[currentId] = updateText;
    setTodos(updated);
    setCurrentId(null);
    setUpdateText("");
  };

  const handleSort = () => {
    if (order === "INC") {
      let sorted = [...todos].sort((a, b) => {
        return a > b ? 1 : -1;
      });
      setTodos(sorted);
      setOrder("DEC");
    }
    if (order === "DEC") {
      let sorted = [...todos].sort((a, b) => {
        return a < b ? 1 : -1;
      });
      setTodos(sorted);
      setOrder("INC");
    }
  };

  return (
    <div>
      <h1>Products</h1>
      <input
        type="text"
        value={newTodos}
        onChange={(e) => setNewTodos(e.target.value)}
      />
      <button onClick={handleAdd}>Add Todo</button>
      <div>
        <FontAwesomeIcon
          icon={faSort}
          onClick={handleSort}
          style={{
            fontSize: "1.5rem",
            marginTop: "10px",
          }}
        />
      </div>

      {todos.map((item, i) => (
        <div key={i}>
          {currentId === i ? (
            <input
              type="text"
              value={updateText}
              onChange={(e) => setUpdateText(e.target.value)}
              style={{ marginRight: "10px" }}
            />
          ) : (
            <span style={{ marginRight: "10px" }}>{item}</span>
          )}

          {currentId === i ? (
            <FontAwesomeIcon
              icon={faCheckSquare}
              onClick={handleSave}
              style={{
                fontSize: "1.5rem",
                marginRight: "10px",
                color: "lime",
              }}
            />
          ) : (
            <>
              <FontAwesomeIcon
                icon={faEdit}
                onClick={() => handleEdit(item, i)}
                style={{
                  fontSize: "1.5rem",
                  marginRight: "10px",
                  color: "lightgreen",
                }}
              />
              <FontAwesomeIcon
                icon={faTrashAlt}
                onClick={() => handleDelete(i)}
                style={{ fontSize: "1.5rem", color: "red" }}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Todos;
