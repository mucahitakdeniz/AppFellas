import { Box, Container } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";

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
      <Container sx={{
        position: 'relative',
        width: '120vh',
        backgroundColor: 'rgb(248, 245, 245)',
        height: '78vh',
        padding: '20px', 
        borderRadius: '20px',
       
      }}>
        <Navbar />
      </Container>
    </Box>
  );
};

export default Home;
