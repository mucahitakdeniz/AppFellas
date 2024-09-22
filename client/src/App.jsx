// App.js

import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRouter from "./route/AppRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { FlightDataProvider } from "./context/FlightDataContext";
import { FilterProvider } from "./context/FilterContext";
import { AirportProvider } from "./context/AirportContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5513a1",
    },
    secondary: {
      main: "#f3e8ff",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AirportProvider>
        <FilterProvider>
          <FlightDataProvider>
            <Router>
              <AppRouter />
            </Router>
          </FlightDataProvider>
        </FilterProvider>
      </AirportProvider>
    </ThemeProvider>
  );
}

export default App;
