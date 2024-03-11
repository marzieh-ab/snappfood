import { Box, Typography } from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

type CategoriesProps = {
  name: string;
  img: string;
};

const Categories = ({ name, img }: CategoriesProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        // width:"16.6667%",  height:"135px",
        padding: "0.1875rem",
        backgroundColor: " rgb(255, 255, 255)",
        border: "1px solid rgb(255, 255, 255)",
        boxshadow: "rgba(58, 61, 66, 0.06) 0px 1px 0px, rgba(0, 0, 0, 0.3) 0px 8px 32px -16px",
        cursor: "pointer",
        
        position: "relative",
        borderRadius: "0.75rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src={img}
        alt=""
        width={"100%"}
        height={"100%"}
        style={{ objectFit: "cover", borderRadius: "0.75rem" }}
      />
      <Box
        sx={{
          position: "relative",
          padding: "0.25rem 1rem 0.25rem 0.8125rem",
          backgroundColor: "white",
          color: "#000",

          right: "-192px",
          bottom: "-40px",
          borderTopLeftRadius: "0.75rem",
          borderBottomRightRadius: "0.75rem",

          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        
          width: "auto",
          whiteSpace: "nowrap"
        }}
      >
        <Typography
          sx={{
            width: "auto",
            height: "auto",
            display: "inline-block",
           
            fontWeight: "400",
            textalign: "initial",
    fontSize: "1rem",
    textOverflow: "ellipsis"
          }}
        >
          {name}
        </Typography>
        <ArrowBackIosNewIcon
          sx={{ color: "#ff00a6", width: "12px", height: "12px" ,marginRight:"14px"}}
        />
      </Box>
    </Box>
  );
};

export default Categories;
