import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

import StarIcon from "@mui/icons-material/Star";
import PersonOutlineSharpIcon from "@mui/icons-material/PersonOutlineSharp";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";
import logo from "./../../public/images/11s.jpg";
function CardItemNew({ resData }) {
  const randomNumber = Math.floor(Math.random() * 90000) + 10000;
  return (
    <Box
      sx={{
        // width: "305.33px",
        cursor: "pointer",
        backgroundColor: "rgb(255, 255, 255)",
        height: "400px",
        border: "1px solid rgba(58, 61, 66, 0.06)",
        boxShadow:
          "rgba(58, 61, 66, 0.06) 0px 1px 0px, rgba(0, 0, 0, 0.05) 0px 2px 8px -2px",
        borderRadius: "0.5rem",
        position: "relative",
      }}
    >
      <Box sx={{ height: "12rem", position: "relative" }}>
        <img
          src={resData.data.backgroundImage}
          alt=""
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: " 0.5rem 0.5rem 0 0",
          }}
          onError={(e) => (e.target.src = logo)}
        />
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0 px",
            bottom: "0px",
            backgroundColor: "rgba(0,0,0,0.1)",
            borderRadius: "0.5rem 0.5rem 0 0 ",
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            top: "1.25rem",
            right: "0px",
            left: "auto",
            maxWidth: "calc(100% - 26px)",
            padding: "0.25rem 0.5rem 0.25rem 0.75rem",
            backgroundColor: "rgb(255, 255, 255)",
            borderRadius: "1rem 0px 0px 1rem",
            display: "flex",
          }}
        >
          {resData.data.best_coupon ? (
            <BookmarkAddedIcon
              sx={{
                color: "rgb(0, 133, 66)",
                fontSize: "15px",
                marginLeft: "5px",
              }}
            />
          ) : (
            ""
          )}

          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "0.75rem",
              width: "auto",
              height: "auto",
              color: "rgb(0, 133, 66)",
            }}
          >
            {" "}
            {resData.data.best_coupon}
          </Typography>
        </Box>
        {resData.data.discountValueForView ? (
          <Box
            sx={{
              position: "absolute",
              padding: " 0.25rem 0.75rem",
              backgroundColor: "rgb(255,255,255)",
              borderTopLeftRadius: "1rem",
              bottom: "0px",
              right: "0px",
            }}
          >
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                width: "auto",
                height: "auto",
                color: "  rgb(224, 0, 150)",
              }}
            >
              %{resData.data.discountValueForView}
            </Typography>
          </Box>
        ) : (
          ""
        )}
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "5.5rem",
          height: "5.5rem",
          top: "32%",
          right: "34%",
          backgroundColor: "rgb(255,255,255)",
          padding: "5px",
          borderRadius: "0.75rem",
          boxShadow:
            "rgba(58, 61, 66, 0.06) 0px 1px 0px, rgba(0, 0, 0, 0.3) 0px 8px 32px -16px",
        }}
      >
        <img
          src={resData.data.featured}
          alt=""
          width={"100%"}
          height={"100%"}
          style={{
            border: "1px solid rgba(58, 61, 66, 0.06)",
            borderRadius: " 0.75rem",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <Typography
          sx={{
            whiteSpace: "nowrap",
            fontWeight: "700",
            fontSize: "1.125rem",
            textOverflow: "hidden",
          }}
        >
          {resData.data.title}{" "}
        </Typography>
        <Box sx={{ display: "flex", margin: "10px 0" }}>
          <Typography>
            <StarIcon
              sx={{ color: "#ffce00", width: "16px", height: "16px" }}
            />
          </Typography>

          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "0.75rem",
              lineheight: "1rem",
              width: "auto",
              padding: "0 5px",
            }}
          >
            {resData.data.rating.toFixed(1)}
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: " 0.75rem",
              color: "rgb(166, 170, 173)",
            }}
          >
            ({randomNumber.toLocaleString()})
          </Typography>
        </Box>
        {resData.data.description ? (
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: " 0.75rem",
              color: "rgb(166, 170, 173)",
            }}
          >
            {resData.data.description}
          </Typography>
        ) : (
          ""
        )}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "0.6875rem 0.875rem",
            borderRadius: "4.5rem",
            boxShadow:
              "rgba(58, 61, 66, 0.06) 0px 1px 0px, rgba(0, 0, 0, 0.05) 0px 2px 8px -2px",
            marginTop: "15px",
          }}
        >
          {resData.data.is_express === true ? (
            <SportsMotorsportsIcon
              sx={{
                color: "#b8b8b8",
                width: "16px",
                height: "16px",
              }}
            />
          ) : (
            <PersonOutlineSharpIcon
              sx={{
                color: "#b8b8b8",
                width: "16px",
                height: "16px",
              }}
            />
          )}

          <Typography
            sx={{
              fontWeight: " 400",
              fontSize: "0.75rem",
              lineheight: "1rem",
              width: "auto",
              margin: "0 3px",
            }}
          >
            {resData.data.is_express ? "ارسال اکسپرس" : "پیک فروشنده"}
          </Typography>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "0.75rem",
                lineheight: "1rem",
                width: "auto",
                color: "rgb(58, 61, 66)",
                margin: "0 3px",
              }}
            >
              {resData.data.delivery_fee}
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "0.75rem",
                lineheight: "1rem",
                width: "auto",
                color: "rgb(58, 61, 66)",
              }}
            >
              {" "}
              تومان
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CardItemNew;
