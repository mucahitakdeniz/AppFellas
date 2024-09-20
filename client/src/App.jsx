import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRouter from "./route/AppRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5513a1",
    },
    secondary: {
      main: "#f3e8ff",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppRouter />
      </Router>
    </ThemeProvider>
  );
}

export default App;
