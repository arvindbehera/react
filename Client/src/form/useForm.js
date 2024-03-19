import react, { useEffect, useReducer, useState } from "react";

const useForm = () => {
  const [initialstate, setInitialstate] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInitialstate({ ...initialstate, [name]: value });
  };

  const handleError = () => {
    if (initialstate.username.length <= 0) {
      setError(true);
    }
  };

  return { initialstate, handleChange, error, handleError };
};

export default useForm;
