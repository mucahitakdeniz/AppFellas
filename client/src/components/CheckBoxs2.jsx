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
  display: 'flex',
  justifyContent: 'space-between',
  margin: "0px",
  padding: "2px 0",
});

const Checkboxes2 = ({ data, setData }) => {
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <FormControl component="fieldset">
      <FormGroup>
        {Object.keys(data).map((item, index) => {
          const [label, price] = item.split(" | ");
          return (
            <SmallFormControlLabel
              key={index}
              control={
                <SmallCheckbox
                  checked={data[item]}
                  onChange={handleChange}
                  name={item}
                  color="primary"
                />
              }
              label={
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <span>{label}</span>
                  <span>{price}</span>
                </div>
              }
            />
          );
        })}
      </FormGroup>
    </FormControl>
  );
};

export default Checkboxes2;
