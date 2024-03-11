import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

interface BreadcrumbsProps {
  paths: { label: string; href: string }[];
}

const CustomBreadcrumbs: React.FC<BreadcrumbsProps> = ({ paths }) => {
  return (
    <Breadcrumbs   separator={null} sx={{ marginTop: "1.5625rem", paddingRight: "1.25rem" }}>
    {paths.map((path, index) => (
      <React.Fragment key={index}>
        {index === paths.length - 1 ? (
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: " 0.625rem",
              color: "rgb(83, 86, 92)", 
            }}
          >
            {path.label}
          </Typography>
        ) : (
          <Link
            color="inherit"
            href={path.href}
            underline="none"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: " 0.625rem",
                color: "rgb(166, 170, 173)",
              }}
            >
              {path.label}
            </Typography>
            <ArrowBackIosIcon
              sx={{
                fontWeight: "400",
                fontSize: " 0.625rem",
                color: "rgb(166, 170, 173)",
              }}
            />
          </Link>
        )}
      </React.Fragment>
    ))}
  </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
