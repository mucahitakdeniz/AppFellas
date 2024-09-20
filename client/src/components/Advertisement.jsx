import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

const Advertisement = () => {
  return (
    <Box
      className="advertisement"
      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
    >
      {[
        {
          imageUrl:
            "https://avatars.mds.yandex.net/i?id=f613e27919d4c1f614c63e501d75c6ebeb8c049e-9145716-images-thumbs&n=13",
          icon: <TimeToLeaveIcon sx={{ color: "white" }} />,
          text: "CAR RENTALS",
        },
        {
          imageUrl:
            "https://avatars.mds.yandex.net/i?id=d278101104162a94d05f63c1a03e83ead35e3540c091167d-5232340-images-thumbs&n=13",
          icon: <ApartmentIcon sx={{ color: "white" }} />,
          text: "HOTELS",
        },
        {
          imageUrl:
            "https://avatars.mds.yandex.net/i?id=4fa0c14acc6ed77ec5bf2702774037336f812362-8306751-images-thumbs&n=13",
          icon: <BeachAccessIcon sx={{ color: "white" }} />,
          text: "TRAVEL PACKAGES",
        },
      ].map((ad, index) => (
        <Card
          key={index}
          sx={{
            backgroundImage: `url(${ad.imageUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "185px",
            height: "185px",
            borderRadius: "1rem",
            position: "relative",
            cursor: "pointer",
            "&:hover": {
              width: "188px",
              height: "188px",
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "0.5rem",
            }}
          >
            {ad.icon}
            <Typography sx={{ color: "white" }}>{ad.text}</Typography>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default Advertisement;
