import React, { useContext } from "react";
import { FormControl, Select, MenuItem } from "@mui/material";
import { FilterContext } from "../context/FilterContext";

const SelectSort = () => {
  const { sortOrder, setSortOrder } = useContext(FilterContext);
  const handleChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <FormControl variant="outlined" fullWidth>
      <Select
        labelId="simple-select-label"
        value={sortOrder}
        onChange={handleChange}
        sx={{ height: "1.7rem" }}
      >
        <MenuItem value="Lowest Price">Lowest Price</MenuItem>
        <MenuItem value="Highest Price">Highest Price</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectSort;
