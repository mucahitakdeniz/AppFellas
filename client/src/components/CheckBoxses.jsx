import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

const SmallCheckbox = styled(Checkbox)({
  "& .MuiSvgIcon-root": {
    fontSize: 13,
  },
});

const Checkboxes = ({ data, setData }) => {
  const handleChange = (event, index) => {
    const updatedData = data.map((item, i) =>
      i === index ? { ...item, check: !item.check } : item
    );
    setData(updatedData);
  };

  return (
    <Box >
      {data?.map((item, index) => (
        <Box
          key={index}
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          sx={{ marginBottom: "0px", overflow: "hidden", whiteSpace: "nowrap" }} >
          <SmallCheckbox
            checked={item.check}
            onChange={(event) => handleChange(event, index)}
            sx={{ padding: 0, marginRight: "2px" }}
          />
          <Typography
            variant="body2"
            sx={{
              flexGrow: 1,
              textAlign: "left",
              fontSize: 11,
              margin: 0,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }} // Taşmayı engelle
          >
            {item.name}
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "right", margin: 0 }}>
            {item.price}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Checkboxes;
