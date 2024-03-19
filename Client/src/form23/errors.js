const error = (initialState) => {
  let err = {};
  if (!initialState.username) {
    err.username = "Username is Required";
  }
  return err;
};

export default error;
