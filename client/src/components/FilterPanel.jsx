
import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import SelectSort from "./SelectSort";
import Checkboxes from "./CheckBoxses.jsx";
import { FilterContext } from "../context/FilterContext.js"; // Ekleyin

const FilterPanel = () => {
  const { timeState, setTimeState, stops, setStops, airlineState, setAirlineState } = useContext(FilterContext); // Kullanım

  return (
    <Box
      sx={{
        marginRight: 0,
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Typography fontSize="0.75rem" variant="body2" align="left" sx={{ fontWeight: "bold" }}>
        Sort by:
      </Typography>
      <SelectSort />
      <Typography fontSize="0.75rem" variant="body2" align="left" sx={{ fontWeight: "bold" }}>
        Arrival Time
      </Typography>
      <Checkboxes data={timeState} setData={setTimeState} />
      <Typography fontSize="0.75rem" variant="body2" align="left" sx={{ fontWeight: "bold" }}>
        Stops
      </Typography>
      <Checkboxes data={stops} setData={setStops} />
      <Typography fontSize="0.75rem" variant="body2" align="left" sx={{ fontWeight: "bold" }}>
        Airline Included
      </Typography>
      <Checkboxes data={airlineState} setData={setAirlineState} />
    </Box>
  );
};

export default FilterPanel;
