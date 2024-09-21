import React from "react";
import { Box } from "@mui/material";
import SearchFlight from "./SearchFlight";
const Flights = () => {
  return (
    <Box>
      <Box
        sx={{
          p: 1,
          borderRadius: 3,
          width: "96%",
          height: "9yar rem",
          bgcolor: "white",
          marginRight: 1,
        }}
      >
        <SearchFlight />
      </Box>
    </Box>
  );
};

export default Flights;
