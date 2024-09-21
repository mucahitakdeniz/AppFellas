import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/system";

const SmallCheckbox = styled(Checkbox)({
  "& .MuiSvgIcon-root": {
    fontSize: 13,
  },
});

const SmallFormControlLabel = styled(FormControlLabel)({
  "& .MuiTypography-root": {
    fontSize: "0.6rem",
  },
 height:"1.1rem"
});

const Checkboxes = ({ data, setData }) => {
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <FormControl component="fieldset">
      <FormGroup>
        {Object.keys(data).map((time, index) => (
          <SmallFormControlLabel
            key={index}
            control={
              <SmallCheckbox
                checked={data[time]}
                onChange={handleChange}
                name={time}
                color="primary"
              />
            }
            label={time}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default Checkboxes;
