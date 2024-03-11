import { Box, Button, Grid, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useEffect, useState } from "react";
import logo from "./../../public/images/logofoodparty.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function FoodParty() {
  const [elapsedTime, setElapsedTime] = useState(() => {
    const storedStartTime = localStorage.getItem("startTime");
    if (storedStartTime) {
      const startTime = parseInt(storedStartTime, 10);
      const currentTime = Date.now();
      const elapsedTime = Math.floor((currentTime - startTime) / 1000);
      return elapsedTime < 5 * 60 * 60 ? elapsedTime : 5 * 60 * 60;
    } else {
      const startTime = Date.now();
      localStorage.setItem("startTime", String(startTime));
      return 0;
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((prevElapsedTime) => {
        const newElapsedTime = prevElapsedTime + 1;
        localStorage.setItem("elapsedTime", String(newElapsedTime));
        return newElapsedTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor((5 * 60 * 60 - elapsedTime) / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor(((5 * 60 * 60 - elapsedTime) % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((5 * 60 * 60 - elapsedTime) % 60)
    .toString()
    .padStart(2, "0");

  return (
    <Box
      sx={{
        height: "auto",
        background:
          " radial-gradient(100% 303.06% at 0% 0%, rgb(252, 95, 153) 0%, rgb(225, 36, 146) 100%)",
        borderRadius: "0.25rem 0.25rem 7.5rem",
        padding: "1.8125rem 0px 1.8125rem 2.5rem",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{ color: "white" }}
            >
              <Typography
                sx={{
                  fontWeight: "700",
                  fontsize: "1.125rem",
                  marginLeft: "15px",
                }}
              >
                {`${hours}:${minutes}:${seconds}`}
              </Typography>
              <AccessTimeIcon />
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              m={"20px 0"}
            >
              <img src={logo} alt="" height={"110px"} />
            </Box>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "1.75rem",
                lineHeight: "2.25rem",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                color: "rgb(249, 250, 251)",
              }}
            >
              فودپارتی
            </Typography>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "rgb(249, 250, 251)",
                fontWeight: "300",
                fontSize: "0.75rem",
                lineHeight: "1rem",
                margin: "20px 0",
              }}
            >
              تخفیفات لحظه ای ویژه شما
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "125px",
                backgroundColor: "white",
                padding: "0.375rem 0.75rem",
                borderRadius: "3rem",
                cursor: "pointer",
              
              }}
            >
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "0.875rem",
                  lineHeight: "1.25rem",
                }}
              >
                مشاهده همه
              </Typography>
              <ArrowBackIosIcon sx={{ width: "1rem", height: "1rem" }} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={8}>
          2
        </Grid>
      </Grid>
    </Box>
  );
}

export default FoodParty;
