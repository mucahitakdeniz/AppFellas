import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "rgb(248, 245, 245)",
        border: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <LocalAirportIcon
            sx={{
              transform: "rotate(90deg)",
              color: "#e9e5ee",
              backgroundColor: "#5513a1",
              borderRadius: 3,
              marginRight: 1,
            }}
          />
          <Typography variant="h6" color="black" sx={{fontSize:"1rem"}}>
            Plane Scape
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={2}>
          <Box display="flex" alignItems="center">
            <IconButton sx={{ color: "#5513a1" }}>
              <LocalOfferRoundedIcon sx={{ fontSize: "70%" }} />
            </IconButton>
            <Typography variant="body2" color="black">Deals</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <IconButton sx={{ backgroundColor: "aliceblue", color: "#5513a1" }}>
              <PublicOutlinedIcon sx={{ fontSize: "70%" }} />
            </IconButton>
            <Typography variant="body2" color="black">Discover</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <img
              className="avatar"
              src="https://avatars.mds.yandex.net/i?id=d26250d529c1daa9331a1407deaf0ea0b348cfa8-4797777-images-thumbs&n=13"
              alt="My Foto"
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #ddd",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                marginLeft: "16px",
                marginRight:"3px",
              }}
            />
            <Typography variant="body2" color="black">Joane Smith</Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
