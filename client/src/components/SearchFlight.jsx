import React, { useState } from "react";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import { Box, Button, Input, InputAdornment, Typography } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";

const SearchFlight = () => {
  const [roundTrip, setRoundTrip] = useState(true);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          p: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "0.5rem",
          }}
        >
          <LocalAirportIcon sx={{ transform: "rotate(90deg)" }} />
          <Typography variant="body2">BOOK YOUR FLIGHT</Typography>
        </Box>
        <Box>
          <Button
            sx={{
              color: roundTrip ? "secondary.main" : "primary.main",
              bgcolor: roundTrip ? "primary.main" : "secondary.main",
              borderRadius: "16px 0 0 16px",
              height: "1.8rem",
              "&:hover": {
                bgcolor: roundTrip ? "primary.dark" : "secondary.dark",
                cursor: "pointer",
              },
            }}
            onClick={() => setRoundTrip(true)}
          >
            Round trip
          </Button>
          <Button
            sx={{
              color: roundTrip ? "primary.main" : "secondary.main",
              bgcolor: roundTrip ? "secondary.main" : "primary.main",
              borderRadius: "0 16px 16px 0",
              height: "1.8rem",
              "&:hover": {
                bgcolor: roundTrip ? "secondary.dark" : "primary.dark",
                cursor: "pointer",
              },
            }}
            onClick={() => setRoundTrip(false)}
          >
            One way
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: "5px",
          marginTop: "1rem",
        }}
      >
        <Input
          size="small"
          color="secondary"
          disableUnderline={true}
          sx={{
            border: 1,
            borderRadius: "16px 0 0 16px",
            marginRight: "5px",
            height: "1.9rem",
          }}
          startAdornment={
            <InputAdornment position="start">
              <FlightTakeoffIcon
                className="search-icons"
                sx={{
                  cursor: "pointer",
                  marginLeft: 1,
                  color: "primary.main",
                  "&:hover": {
                    color: "primary.dark",
                  },
                }}
              />
            </InputAdornment>
          }
        />
        <Input
          size="small"
          color="secondary"
          disableUnderline={true}
          sx={{
            border: 1,
            borderRadius: "0 16px 16px 0",
            marginRight: "5px",
            height: "1.9rem",
          }}
          startAdornment={
            <InputAdornment position="start">
              <FlightLandIcon
                className="search-icons"
                sx={{
                  cursor: "pointer",
                  marginLeft: 1,
                  color: "primary.main",
                  "&:hover": {
                    color: "primary.dark",
                  },
                }}
              />
            </InputAdornment>
          }
        />

        <Input
          size="small"
          color="secondary"
          disableUnderline={true}
          sx={{
            border: 1,
            borderRadius: roundTrip ? "16px 0 0 16px" : "16px 16px 16px 16px",
            p: 0.2,
            marginRight: "5px",
            height: "1.9rem",
          }}
          startAdornment={
            <InputAdornment position="start">
              <InsertInvitationIcon
                className="search-icons"
                sx={{
                  cursor: "pointer",
                  marginLeft: 1,
                  color: "primary.main",
                  "&:hover": {
                    color: "primary.dark",
                  },
                }}
              />
            </InputAdornment>
          }
        />
        {roundTrip && (
          <Input
            size="small"
            color="secondary"
            disableUnderline={true}
            sx={{
              border: 1,
              borderRadius: "0 16px 16px 0",
              p: 0.2,
              height: "1.9rem",
            }}
            startAdornment={
              <InputAdornment position="start">
                <InsertInvitationIcon
                  className="search-icons"
                  sx={{
                    cursor: "pointer",
                    marginLeft: 1,
                    color: "primary.main",
                    "&:hover": {
                      color: "primary.dark",
                    },
                  }}
                />
              </InputAdornment>
            }
          />
        )}
      </Box>
      <Box sx={{ display: "flex" }}>
        <Button
          sx={{
            color: "white ",
            backgroundColor: "primary.main",
            borderRadius: "6px 6px 6px 6px",
            marginTop: 2,
            alignSelf: "flex-start",
            height: "1.8rem",
            "&:hover": {
              bgcolor: "primary.dark",
              cursor: "pointer",
            },
          }}
        >
          Show flights
        </Button>
      </Box>
    </Box>
  );
};

export default SearchFlight;
