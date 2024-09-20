import { Box, Container } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import Flights from "../components/Flights";
import Advertisement from "../components/Advertisement";

const Home = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#d1c4e9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Container
        sx={{
          position: "relative",
          width: "120vh",
          backgroundColor: "rgb(248, 245, 245)",
          height: "78vh",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <Navbar />
        <Container sx={{ display: "flex", flexDirection: "row", p: 1 }}>
          <Box sx={{ flex: 1 }}>
            <Flights />
          </Box>
          <Box sx={{ width: "16%", ml: "auto" }}>
            <Advertisement />
          </Box>
        </Container>
      </Container>
    </Box>
  );
};

export default Home;
