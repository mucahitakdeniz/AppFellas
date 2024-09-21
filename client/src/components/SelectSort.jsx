import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const SelectSort = () => {
  const [value, setValue] = useState("lowest");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl variant="outlined" fullWidth>
      <Select
        labelId="simple-select-label"
        value={value}
        onChange={handleChange}
        sx={{height:"1.7rem"}}
      >
        <MenuItem value="lowest">Lowest price</MenuItem>
        <MenuItem value="highest">Highest price</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectSort;
