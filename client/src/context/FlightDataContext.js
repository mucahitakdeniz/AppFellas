import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const FlightDataContext = createContext();

export const FlightDataProvider = ({ children }) => {
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState(null);
  const URL = process.env.REACT_APP_API_URL;
  const API_ID = process.env.REACT_APP_API_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const VERSION = process.env.REACT_APP_VERSION;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(URL, {
          headers: {
            app_id: API_ID,
            app_key: API_KEY,
            ResourceVersion: VERSION,
            Accept: "application/json",
          },
        });
        setFlights(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    getData();
  }, [URL, API_ID, API_KEY, VERSION]);

  return (
    <FlightDataContext.Provider value={{ flights, error }}>
      {children}
    </FlightDataContext.Provider>
  );
};
