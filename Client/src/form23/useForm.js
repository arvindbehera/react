import { useEffect, useState } from "react";

export const useForm = (callback, error) => {
  const [initialState, setInitialState] = useState({
    username: "",
    email: "",
    password: "",
    cnfPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setInitialState({ ...initialState, [name]: value });
  }

  function handleSubmit(e) {
    setIsLoading(true);
    setErrors(error);
    e.preventDefault();
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isLoading) {
      callback();
    }
  }, [errors]);

  return { initialState, handleChange, handleSubmit, errors };
};
