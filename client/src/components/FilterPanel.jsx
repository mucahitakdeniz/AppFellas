import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import UnstyledSelectIntroduction from "./SelectSort";
import Checkboxes2 from "./CheckBoxs2";
import Checkboxes from "./Checkboxs";

const FilterPanel = () => {
  const [timeState, setTimeState] = useState({
    "05.00 AM -11.59 AM": false,
    "12.00 PM-5.59 PM": false,
  });
  const [stops, setStops] = useState({
    "Nonstop | $230": false,
    "1-stop | $230": false,
    "2-stop | $230": false,
  });

  return (
    
      <Box
        sx={{
          marginRight: 0,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography
          fontSize="0.75rem"
          variant="body2"
          align="left" 
          sx={{ fontWeight: "bold" }} 
        >
          Sort by:
        </Typography>
        <UnstyledSelectIntroduction />
        <Typography
          fontSize="0.75rem"
          variant="body2"
          align="left"
          sx={{ fontWeight: "bold" }} >
          Arrival Time
        </Typography>
        <Checkboxes data={timeState} setData={setTimeState} />
        <Typography
          fontSize="0.75rem"
          variant="body2"
          align="left"
          sx={{ fontWeight: "bold" }} 
        >
          Stops
        </Typography>
        <Checkboxes2 data={stops} setData={setStops} />
      </Box>
  );
};

export default FilterPanel;
