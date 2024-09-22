import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import UnstyledSelectIntroduction from "./SelectSort";
import Checkboxes2 from "./CheckBoxses2.jsx";
import Checkboxes from "./Checkboxes1.jsx.jsx";

const FilterPanel = () => {
  const [timeState, setTimeState] = useState({
    "05.00 AM -11.59 AM": false,
    "12.00 PM-5.59 PM": false,
  });
  const [stops, setStops] = useState([
    {
      name: "Nonstop",
      price: "$230",
      check: false,
    },
    {
      name: "1 stop",
      price: "$290",
      check: false,
    },
    {
      name: "Nonstop",
      price: "$420",
      check: false,
    },
  ]);
  const [airlineState, setAirlineState] = useState([
    { name: "Türk Hava Yolları", price: "$230", check: false },
    { name: "Lufthansa", price: "$230", check: false },
    { name: "British Airways", price: "$230", check: false },
    { name: "American Airlines", price: "$230", check: false },
    { name: "Emirates", price: "$230", check: false },
    { name: "Qatar Airways", price: "$230", check: false },
    { name: "Air France", price: "$230", check: false },
    
  ]);

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
        sx={{ fontWeight: "bold" }}
      >
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
      <Typography
        fontSize="0.75rem"
        variant="body2"
        align="left"
        sx={{ fontWeight: "bold" }}
      >
        Airline Included
      </Typography>
      <Checkboxes2 data={airlineState} setData={setAirlineState} />
    </Box>
  );
};

export default FilterPanel;
