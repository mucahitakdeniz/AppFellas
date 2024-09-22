// App.js

import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRouter from "./route/AppRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { FlightDataProvider } from "./context/FlightDataContext";
import { FilterProvider } from "./context/FilterContext"; // Düzgün adlandırma

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
      <FilterProvider> {/* Düzgün yazım */}
        <FlightDataProvider>
          <Router>
            <AppRouter />
          </Router>
        </FlightDataProvider>
      </FilterProvider>
    </ThemeProvider>
  );
}

export default App;
