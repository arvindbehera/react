/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState, createContext } from "react";

const CitiesContext = createContext();

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);

  const getCities = async () => {
    try {
      const resp = await fetch(`http://localhost:8000/cities`);
      const data = await resp.json();
      setCities(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCities();
  }, []);

  return (
    <CitiesContext.Provider value={{ cities, getCities }}>
      {children}
    </CitiesContext.Provider>
  );
};

export { CitiesProvider, CitiesContext };
