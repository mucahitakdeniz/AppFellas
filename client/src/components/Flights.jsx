import React from "react";
import { Box } from "@mui/material";
import SearchFlight from "./SearchFlight";
import FilterPanel from "./FilterPanel";

const Flights = () => {
  return (
    <Box>
      <Box
        sx={{
          p: 1,
          borderRadius: 3,
          width: "97%",
          height: "9rem",
          bgcolor: "white",
          marginRight: 1,
        }}
      >
        <SearchFlight />
      </Box>
      <Box
        sx={{
          p: 1,
          borderRadius: 3,
          width: "97%",
          height: "20rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between", 
        }}
      >
        <Box sx={{ width: "87%" }}>
          <div>flights</div>
        </Box>
        <Box
          sx={{
            bgcolor: "rgb(248, 245, 245)",
            width: "20%",
            marginTop: "2.2rem",p:1
          }}
        >
          <FilterPanel />
        </Box>
      </Box>
    </Box>
  );
};

export default Flights;
