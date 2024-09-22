import React, { createContext, useState } from 'react';

export const AirportContext = createContext();

const airports = [
    { "code": "IST", "name": "Istanbul Airport" },
    { "code": "SAW", "name": "Sabiha Gökçen Airport" },
    { "code": "ADB", "name": "Adnan Menderes Airport" },
    { "code": "DLM", "name": "Dalaman Airport" },
    { "code": "AYT", "name": "Antalya Airport" },
    { "code": "ESB", "name": "Esenboğa Airport" },
    { "code": "TZX", "name": "Trabzon Airport" },
    { "code": "BJV", "name": "Milas-Bodrum Airport" },
    { "code": "GZT", "name": "Gaziantep Airport" },
    { "code": "ADA", "name": "Adana Airport" },
    { "code": "ASR", "name": "Kayseri Airport" },
    { "code": "DIY", "name": "Diyarbakır Airport" },
    { "code": "EZS", "name": "Elazığ Airport" },
    { "code": "ERZ", "name": "Erzurum Airport" },
    { "code": "HTY", "name": "Hatay Airport" },
    { "code": "ISE", "name": "Isparta Süleyman Demirel Airport" },
    { "code": "KYA", "name": "Konya Airport" },
    { "code": "MLX", "name": "Malatya Erhaç Airport" },
    { "code": "NAV", "name": "Nevşehir Kapadokya Airport" },
    { "code": "SAW", "name": "Sabiha Gökçen Airport" }
  ]

export const AirportProvider = ({ children }) => {
  const [fromAirport, setFromAirport] = useState('');
  const [toAirport, setToAirport] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  
  const [filteredAirports, setFilteredAirports] = useState([]);

  const handleAirportSearch = (query) => {
    const filtered = airports.filter(airport => 
      airport.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredAirports(filtered);
  };

  return (
    <AirportContext.Provider 
      value={{
        fromAirport, setFromAirport,
        toAirport, setToAirport,
        departureDate, setDepartureDate,
        returnDate, setReturnDate,
        filteredAirports, handleAirportSearch
      }}>
      {children}
    </AirportContext.Provider>
  );
};
