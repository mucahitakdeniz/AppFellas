import { Box, Container } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#f3e8ff",
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
        boxShadow: `
          0 1px 5px rgba(253, 252, 253, 0.7),
          2px -2px 4px rgba(247, 244, 246, 0.3),
          -2px -2px 4px rgba(226, 220, 224, 0.3),
          0 8px 12px rgba(128, 0, 128, 0.7)
        `,
      }}>
        <Navbar />
      </Container>
    </Box>
  );
};

export default Home;
