import { Box } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import Flights from "../components/Flights";
import Advertisement from "../components/Advertisement";

const Home = () => {
  return (
    <Box
  sx={{
    height: "100vh", 
    width: "100vw",   
    backgroundColor: "#d1c4e9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  }}
>
  <Box
    sx={{
      width: "85%",  
      maxWidth: "none", 
      backgroundColor: "rgb(248, 245, 245)",
      height: "80%",  
      padding: "20px",
      borderRadius: "20px",
    }}
  >
        <Navbar />
        <Box sx={{ display: "flex", flexDirection: "row", p: 1,width:"100%",height:"87%" }}>
          <Box sx={{ flex: 1 }}>
            <Flights />
          </Box>
          <Box sx={{ width: "14%", ml: "auto" }}>
            <Advertisement />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
