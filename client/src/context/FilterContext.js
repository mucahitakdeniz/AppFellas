
import React, { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [timeState, setTimeState] = useState([
    { name: "05.00 AM -11.59 AM", check: false },
    { name: "12.00 PM-5.59 PM", check: false },
  ]);
  
  const [stops, setStops] = useState([
    { name: "Nonstop", price: "$230", check: false },
    { name: "1 stop", price: "$290", check: false },
    { name: "2 stops", price: "$420", check: false },
  ]);

  const [airlineState, setAirlineState] = useState([
    { name: "Türk Hava Yolları", price: "$230", check: false },
    { name: "Lufthansa", price: "$230", check: false },
    { name: "British Airways", price: "$230", check: false },
    { name: "American Airlines", price: "$230", check: false },
    { name: "Emirates", price: "$230", check: false },
    { name: "Qatar Airways", price: "$230", check: false },
    { name: "Air France", price: "$230", check: false },
  ]);
  const [sortOrder, setSortOrder] = useState("Lowest Price")

  return (
    <FilterContext.Provider value={{ timeState, setTimeState, stops, setStops, airlineState, setAirlineState,sortOrder,setSortOrder }}>
      {children}
    </FilterContext.Provider>
  );
};
