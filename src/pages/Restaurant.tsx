import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Button,
  Switch,
  AppBar,
} from "@mui/material";
import Header from "../components/Header";
import BreadcrumbsCustom from "../components/BreadcrumbsCustom";
import Defaultorder from "../components/Defaultorder";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import fastfood from "../../public/images/carresturantfastfood.jpg";
import irani from "../../public/images/catresturantirani.jpg";
import kabab from "../../public/images/catresturantkabab.jpg";
import salad from "../../public/images/catresturantsalad.jpg";
import darya from "../../public/images/catresturantdarya.jpg";
import melal from "../../public/images/catreaturanmelal.jpg";
import SwitchCustom from "../components/SwitchCustom";
import MenuHeader from "../components/MenuHeader";
import { resturantData } from "../../public/Data/ResturantData";
import CardItemNew from "../components/CardItemNew";

function Restaurant() {
  const [state, setState] = useState(1);
  // const [isSticky, setIsSticky] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const offset = window.pageYOffset;
  //     setIsSticky(offset >= 5 && offset < window.innerHeight - 34); // Check if scrolled between 5rem and -34rem from the bottom
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const handleStateChange = (newState: any) => {
    setState(newState);
  };
  return (
    <>
      <Header placeholder="رستوران" />
      <MenuHeader />

      <BreadcrumbsCustom
        paths={[
          { label: "اسنپ فود", href: "/" },
          { label: "رستوران", href: "/restaurant" },
          { label: "رستوران های تهران", href: "#" },
        ]}
      />
      <Defaultorder />
      <Box sx={{ padding: "0 1.5rem", height: "100%", width: "100%" }}>
        <Grid container spacing={3}>
          <Grid item xs={3} sx={{}}>
            <aside
              style={{
                position: "sticky",
                top: "-34rem",

                // backgroundColor:"red",
                height: "100vh",
              }}
            >
              <Box
                sx={{
                  padding: "1rem",
                  border: "1px solid rgba(201, 212, 231, 0.06)06)",
                  borderRadius: "0.75rem",

                  boxShadow:
                    "rgba(58, 61, 66, 0.06) 0px 1px 0px, rgba(0, 0, 0, 0.05) 0px 2px 8px -2px",
                }}
              >
                <Box
                  sx={{
                    height: "3rem",
                    padding: "0.1875rem",
                    textAlign: "right",
                    backgroundColor: "rgba(58, 61, 66, 0.06)",
                    borderRadius: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "700",
                      fontSize: "0.875rem",
                      color: "rgb(58, 61, 66)",
                      marginRight: "20px",
                    }}
                  >
                    همه دسته بندی ها
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "15px 0",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",

                      alignItems: "center",
                      width: "200px",
                    }}
                  >
                    <img src={fastfood} alt="" width={"32px"} height={"32px"} />
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "0.875rem",
                        color: "rgb(58, 61, 66)",
                        marginRight: "10px",
                      }}
                    >
                      فست فود
                    </Typography>
                  </Box>
                  <Box sx={{ width: "20px" }}>
                    <ArrowBackIosIcon
                      sx={{
                        width: "15px",
                        height: "15px",
                        color: "#dbe0e2",
                        marginLeft: "0.700rem ",
                      }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "15px 0",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",

                      alignItems: "center",
                      width: "200px",
                    }}
                  >
                    <img src={irani} alt="" width={"32px"} height={"32px"} />
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "0.875rem",
                        color: "rgb(58, 61, 66)",
                        marginRight: "10px",
                      }}
                    >
                      ایرانی
                    </Typography>
                  </Box>
                  <Box sx={{ width: "20px" }}>
                    <ArrowBackIosIcon
                      sx={{
                        width: "15px",
                        height: "15px",
                        color: "#dbe0e2",
                        marginLeft: "0.700rem ",
                      }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "15px 0",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",

                      alignItems: "center",
                      width: "200px",
                    }}
                  >
                    <img src={kabab} alt="" width={"32px"} height={"32px"} />
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "0.875rem",
                        color: "rgb(58, 61, 66)",
                        marginRight: "10px",
                      }}
                    >
                      کباب
                    </Typography>
                  </Box>
                  <Box sx={{ width: "20px" }}>
                    <ArrowBackIosIcon
                      sx={{
                        width: "15px",
                        height: "15px",
                        color: "#dbe0e2",
                        marginLeft: "0.700rem ",
                      }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "15px 0",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",

                      alignItems: "center",
                      width: "200px",
                    }}
                  >
                    <img src={salad} alt="" width={"32px"} height={"32px"} />
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "0.875rem",
                        color: "rgb(58, 61, 66)",
                        marginRight: "10px",
                      }}
                    >
                      سالاد{" "}
                    </Typography>
                  </Box>
                  {/* <Box  sx={{width:"20px"}}>
                  <ArrowBackIosIcon sx={{ width: "15px", height: "15px",  color:"#dbe0e2" , marginLeft: "0.700rem "}} />
                </Box> */}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "15px 0",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",

                      alignItems: "center",
                      width: "200px",
                    }}
                  >
                    <img src={darya} alt="" width={"32px"} height={"32px"} />
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "0.875rem",
                        color: "rgb(58, 61, 66)",
                        marginRight: "10px",
                      }}
                    >
                      دریایی
                    </Typography>
                  </Box>
                  {/* <Box  sx={{width:"20px"}}>
                  <ArrowBackIosIcon sx={{ width: "15px", height: "15px",  color:"#dbe0e2" , marginLeft: "0.700rem "}} />
                </Box> */}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "15px 0",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",

                      alignItems: "center",
                      width: "200px",
                    }}
                  >
                    <img src={melal} alt="" width={"32px"} height={"32px"} />
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "0.875rem",
                        color: "rgb(58, 61, 66)",
                        marginRight: "10px",
                      }}
                    >
                      بین الملل
                    </Typography>
                  </Box>
                  {/* <Box  sx={{width:"20px"}}>
                  <ArrowBackIosIcon sx={{ width: "15px", height: "15px",  color:"#dbe0e2" , marginLeft: "0.700rem "}} />
                </Box> */}
                </Box>
              </Box>
              <Box
                sx={{
                  padding: "1rem",
                  border:
                    "1px solid hsla(217.99999999999997, 38.46153846153845%, 84.70588235294117%, 0.06)06)",
                  borderRadius: "0.75rem",
                  margin: "15px 0",

                  boxShadow:
                    "rgba(58, 61, 66, 0.06) 0px 1px 0px, rgba(0, 0, 0, 0.05) 0px 2px 8px -2px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "0.75rem",
                    lineheight: "1rem",
                    color: "rgb(58, 61, 66)",
                  }}
                >
                  کلاس قیمتی
                </Typography>
                <Box sx={{ marginTop: "5px" }}>
                  <Box
                    sx={{
                      backgroundColor: "rgba(58, 61, 66, 0.06)",
                      borderRadius: "0.75rem",
                      cursor: " pointer",
                      display: "flex",
                      padding: "5px 3px",
                    }}
                  >
                    <Button
                      sx={{
                        color: "rgb(58, 61, 66)",
                        fontWeight: "400",
                        fontSize: "0.875rem",
                        border: "none",
                        width: "66px",
                        height: "40px",
                        padding: "0.625rem",
                        transition:
                          "background-color 0.3s ease, border 0.3s ease",
                        "&:hover": {
                          backgroundColor: "transparent",
                          border: "none",
                        },
                        ...(state === 1 && {
                          backgroundColor: "white",
                          color: "rgb(0, 184, 98)",
                          borderRadius: "0.625rem",
                        }),
                      }}
                      variant={state === 1 ? "contained" : "outlined"}
                      onClick={() => handleStateChange(1)}
                    >
                      همه
                    </Button>
                    <Button
                      sx={{
                        color: "rgb(58, 61, 66)",
                        fontWeight: "400",
                        fontSize: "0.875rem",
                        border: "none",
                        width: "66px",
                        height: "40px",
                        padding: "0.625rem",
                        transition: "all 0.3000s",
                        "&:hover": {
                          backgroundColor: "transparent",
                          border: "none",
                        },
                        ...(state === 2 && {
                          backgroundColor: "white",
                          color: "rgb(0, 184, 98)",
                          borderRadius: "0.625rem",
                        }),
                      }}
                      variant={state === 2 ? "contained" : "outlined"}
                      onClick={() => handleStateChange(2)}
                    >
                      اقتصادی
                    </Button>
                    <Button
                      sx={{
                        color: "rgb(58, 61, 66)",
                        fontWeight: "400",
                        fontSize: "0.875rem",
                        border: "none",
                        width: "66px",
                        height: "40px",
                        padding: "0.625rem",
                        transition: "all 0.3000s",
                        "&:hover": {
                          backgroundColor: "transparent",
                          border: "none",
                        },
                        ...(state === 3 && {
                          backgroundColor: "white",
                          color: "rgb(0, 184, 98)",
                          borderRadius: "0.625rem",
                        }),
                      }}
                      variant={state === 3 ? "contained" : "outlined"}
                      onClick={() => handleStateChange(3)}
                    >
                      متوسط
                    </Button>
                    <Button
                      sx={{
                        color: "rgb(58, 61, 66)",
                        fontWeight: "400",
                        fontSize: "0.875rem",
                        border: "none",
                        width: "66px",
                        height: "40px",
                        padding: "0.625rem",
                        transition: "all 0.3000s",
                        "&:hover": {
                          backgroundColor: "transparent",
                          border: "none",
                        },
                        ...(state === 4 && {
                          backgroundColor: "white",
                          color: "rgb(0, 184, 98)",
                          borderRadius: "0.625rem",
                        }),
                      }}
                      variant={state === 4 ? "contained" : "outlined"}
                      onClick={() => handleStateChange(4)}
                    >
                      گران
                    </Button>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  padding: "1rem",
                  border:
                    "1px solid hsla(217.99999999999997, 38.46153846153845%, 84.70588235294117%, 0.06)06)",
                  borderRadius: "0.75rem",
                  margin: "15px 0",

                  boxShadow:
                    "rgba(58, 61, 66, 0.06) 0px 1px 0px, rgba(0, 0, 0, 0.05) 0px 2px 8px -2px",
                }}
              >
                <Box
                  sx={{
                    borderBottom: "1px solid rgba(58, 61, 66, 0.06) ",
                    minHeight: "3.4375rem",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "0.875rem",
                      color: "rgb(58, 61, 66)",
                    }}
                  >
                    پیک اسنپ فود
                  </Typography>
                </Box>

                <Box
                  sx={{
                    borderBottom: "1px solid rgba(58, 61, 66, 0.06) ",
                    display: "flex",
                    justifyContent: "space-between",

                    minHeight: "3.4375rem",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "0.875rem",
                      color: "rgb(58, 61, 66)",
                    }}
                  >
                    داری کوپن
                  </Typography>
                  <SwitchCustom />
                </Box>
                <Box
                  sx={{
                    borderBottom: "1px solid rgba(58, 61, 66, 0.06) ",
                    display: "flex",
                    justifyContent: "space-between",

                    minHeight: "3.4375rem",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "0.875rem",
                      color: "rgb(58, 61, 66)",
                    }}
                  >
                    دارای تخفیف
                  </Typography>
                  <SwitchCustom />
                </Box>
                <Box
                  sx={{
                    borderBottom: "1px solid rgba(58, 61, 66, 0.06) ",
                    display: "flex",
                    justifyContent: "space-between",

                    minHeight: "3.4375rem",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "0.875rem",
                      color: "rgb(58, 61, 66)",
                    }}
                  >
                    فودپرو
                  </Typography>
                  <SwitchCustom />
                </Box>
                <Box
                  sx={{
                    borderBottom: "1px solid rgba(58, 61, 66, 0.06) ",
                    display: "flex",
                    justifyContent: "space-between",

                    minHeight: "3.4375rem",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "0.875rem",
                      color: "rgb(58, 61, 66)",
                    }}
                  >
                    به صرفه
                  </Typography>
                  <SwitchCustom />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",

                    minHeight: "3.4375rem",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "0.875rem",
                      color: "rgb(58, 61, 66)",
                    }}
                  >
                    خوش قیمت
                  </Typography>
                  <SwitchCustom />
                </Box>
              </Box>
            </aside>
          </Grid>
          <Grid item xs={9}>
            <Grid
              container
              spacing={2}
              sx={{ width: "calc(100% + 1.5rem)",  }}
            >
              {resturantData.map((resData: any) => (
                <Grid item key={resData.data.id} xs={4}>
                  <CardItemNew resData={resData} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Restaurant;
