import { useRef, useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  Link
 
} from "@mui/material";
import RedeemIcon from "@mui/icons-material/Redeem";
import logo from "./../../public/images/logo.png";





import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { CategoriesData } from "../../public/Data/CategoriesData";
import { UserSuggestionData } from "./../../public/Data/UserSuggestionData";
import Categories from "../components/Categories";
import Kasbokar from "../../public/images/kasbokar.png";
import mojavez from "../../public/images/mojavez.png";

import { NewFood } from "../../public/Data/NewFood";
import Applicationimg from "../../public/images/application.png";
import { v4 } from "uuid";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import SwiperCore from "swiper/core";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/scrollbar";
import FoodParty from "../components/FoodParty";

import CustomSwiper from "../components/CustomSwiper";
import { cities } from "../../public/Data/cities";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Header from "../components/Header";
import MenuHeader from "../components/MenuHeader";
// import { Link } from "react-router-dom";

function Home() {
  const swiperRef = useRef<SwiperCore | null>(null);

  const [phone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);
  const [successValidPhone, setSuccessValidPhone] = useState(false);

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const clickValidPhone = () => {
    if (phone == "") {
      setValidPhone(true);
    } else {
      if (/^(09)[0-9]{9}$/.test(phone)) {
        setSuccessValidPhone(true);
        setValidPhone(false);
      } else {
        setValidPhone(true);
      }
    }
  };

  return (
    <>
    <Header  placeholder="اسنپ"/>
    <MenuHeader/>
   

      <Divider variant="fullWidth" />
      <main style={{ margin: "0px auto" }}>
        <Box sx={{ padding: "2.5rem", backgroundColor: "#f3f3f3" }}>
          <Typography
            sx={{
              marginBottom: "36px",
              fontWeight: "700",
              fontSize: " 1.5rem",
              lineHeight: "2rem",
            }}
          >
            {" "}
            دسته بندی ها
          </Typography>
          <Grid container spacing={2}>
            {CategoriesData.map((categori) => (
              <Grid item width={"16.6667%"} height={"135px"} key={v4()}>
                <Categories name={categori.name} img={categori.img} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ padding: "2.5rem", position: "relative" }}>
          <FoodParty />
        </Box>

        <Box sx={{ padding: "2.5rem", position: "relative" }}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            marginBottom={"36px"}
          >
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: " 1.5rem",
                lineHeight: "2rem",
              }}
            >
              پیشنهاد کاربران
            </Typography>
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            >
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "1.125rem",
                  color: "rgb(0, 184, 98);",
                }}
              >
                مشاهده همه
              </Typography>
              <ArrowBackIosIcon
                sx={{
                  fontWeight: "700",
                  fontSize: "1.125rem",
                  color: "rgb(0, 184, 98)",
                  marginRight: "10px",
                }}
              />
            </Box>
          </Box>
          {/* <Swiper
            spaceBetween={20}
            slidesPerView={4}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            scrollbar={{ draggable: true }}
            navigation={{
              nextEl: ".next-button",
              prevEl: ".prev-button",
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {UserSuggestionData.slice(0, 7).map((suggestion) => {
             
              return (
                <SwiperSlide
                  style={{
                    width: "306px",
                    height: "25rem",
                    marginLeft: "16px",
                  }}
                >
                  <CardItem
                    name={suggestion.name}
                    img={suggestion.img}
                    text={suggestion.text}
                    rate={suggestion.rate}
                    score={suggestion.score}
                    logo={suggestion.logo}
                    gift={suggestion.gift}
                    discount={suggestion.discount}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper> */}
          <CustomSwiper slides={UserSuggestionData} spaceBetween={20} />
          {/* <div className="swiper-button-next  swiper-button ">
            <button className="next-button  btn-next" onClick={goToNextSlide}>
              <ArrowForwardIosIcon sx={{ color: " rgb(255, 0, 166);" }} />
            </button>
          </div>
          <div className="  swiper-button-prev swiper-button ">
     
            <button className="prev-button  btn-prev" onClick={goToPrevSlide}>
              <ArrowBackIosIcon sx={{ color: " rgb(255, 0, 166);" }} />
            </button>
          </div> */}
        </Box>
        <Box sx={{ padding: "2.5rem", position: "relative" }}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            marginBottom={"36px"}
          >
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: " 1.5rem",
                lineHeight: "2rem",
              }}
            >
              تازه ها در اسنپ فود
            </Typography>
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            >
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "1.125rem",
                  color: "rgb(0, 184, 98);",
                }}
              >
                مشاهده همه
              </Typography>
              <ArrowBackIosIcon
                sx={{
                  fontWeight: "700",
                  fontSize: "1.125rem",
                  color: "rgb(0, 184, 98)",
                  marginRight: "10px",
                }}
              />
            </Box>
          </Box>
          {/* <Swiper
            spaceBetween={20}
            slidesPerView={4}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            scrollbar={{ draggable: true }}
            navigation={{
              nextEl: ".next-button",
              prevEl: ".prev-button",
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {NewFood?.slice(0, 7).map((suggestion) => {
              console.log(suggestion, "sugg");
              return (
                <SwiperSlide
                  style={{
                    width: "306px",
                    height: "25rem",
                    marginLeft: "16px",
                  }}
                >
                  <CardItem
                    name={suggestion.name}
                    img={suggestion.img}
                    score={suggestion.score}
                    logo={suggestion.logo}
                    discount={suggestion.discount}
                  />
                </SwiperSlide>
                
              
              );
            })}
          </Swiper>
          <div className="swiper-button-next  swiper-button ">
            <button className="next-button  btn-next" onClick={goToNextSlide}>
              <ArrowForwardIosIcon sx={{ color: " rgb(255, 0, 166);" }} />
            </button>
          </div>
          <div className="  swiper-button-prev swiper-button ">
     
            <button className="prev-button  btn-prev" onClick={goToPrevSlide}>
              <ArrowBackIosIcon sx={{ color: " rgb(255, 0, 166);" }} />
            </button>
          </div> */}
          <CustomSwiper slides={NewFood} spaceBetween={20} />
        </Box>
        <Box sx={{ padding: "2.5rem", position: "relative" }}>
          <Box
            sx={{
              height: "auto",
              backgroundColor: " rgb(235, 237, 240)",
              borderRadius: "0.25rem 0.25rem 7.5rem",
              padding: "2rem ",
              paddingBottom: "0px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                // alignItems: "center",
                justifyContent: "space-between",
                // padding: " 4rem",
              }}
            >
              <Box
                sx={{
                  boxSizing: "border-box",
                  maxWidth: "60%",
                  paddingRight: "5rem",
                  paddingleft: "6rem",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "2rem",
                    color: "rgb(58, 61, 66)",
                    fontWeight: "700",
                    marginTop: "0px",
                  }}
                >
                  اپلیکیشن اسنپ‌فود
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "0.900rem",
                    color: " rgb(83, 86, 92)",
                    marginBottom: "2.5rem",
                    lineHeight: "2rem",
                    marginTop: "2.5rem",
                    width: "90%",
                  }}
                >
                  با اپلیکیشن اسنپ‌فود به راحتی و با چند کلیک ساده می‌توانید
                  رستوران‌ها، کافه‌ها، شیرینی‌فروشی‌ها و سوپرمارکت‌های نزدیک
                  خودتان را جست‌و‌جو کرده و از تجربه سفارش آسان از اسنپ‌فود لذت
                  ببرید.
                </Typography>

                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: " 0.75rem",
                    marginBottom: "10px",
                    color: "rgb(83, 86, 92)",
                  }}
                >
                  برای دریافت لینک دانلود اپلیکیشن، شماره موبایلتان رو وارد کنید
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "white",
                    width: "300px",
                    borderRadius: "0.5rem",
                    padding: "8px",
                  }}
                >
                  <TextField
                    variant="standard"
                    placeholder="********09"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    sx={{ position: "absolute", textAlign: "left" }}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <Button
                    sx={{
                      position: "relative",
                      backgroundColor: "#ff38ac",
                      border: "0.09375rem solid rgb(255, 0, 166)",
                      borderRadius: "0.375rem",
                      minWidth: "6.6875rem",
                      fontSize: "0.875rem",
                      fontWeight: "700",
                      color: "white",
                      left: "-174px",
                      "&:hover": {
                        backgroundColor: "#ff38ac",
                        color: "white",
                      },
                    }}
                    onClick={clickValidPhone}
                  >
                    دریافت لینک
                  </Button>
                </Box>
                {validPhone ? (
                  <Typography
                    sx={{
                      color: "red",
                      fontWeight: "400",
                      fontSize: "0.875rem",
                      margin:"0.5rem 0"
                    }}
                  >
                    شماره وارد شده معتبر نمیباشد
                  </Typography>
                ) : (
                  ""
                )}
                {successValidPhone ? (
                  <Typography
                    sx={{
                      color: "green",
                      fontWeight: "400",
                      fontSize: "0.875rem",
                      margin:"0.5rem 0"
                    }}
                  >
                    لینک دانلود برای شما ارسال شد{" "}
                  </Typography>
                ) : (
                  ""
                )}
              </Box>
              <Box sx={{ position: "relative", top: "-170px" }}>
                <img src={Applicationimg} alt="" width={"450px"} />
              </Box>
            </Box>
          </Box>
          <Box></Box>
        </Box>
        <Box sx={{ padding: "2.5rem", position: "relative" }}>
          <Box
            sx={{
              marginTop: "10.0625rem",
              padding: "4rem",
              backgroundColor: "rgb(249, 250, 251)",
              borderRadius: "2rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "1.75rem",
                  color: "rgb(58, 61, 66)",
                }}
              >
                صاحب کسب و کار هستید؟
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "1.125rem",
                  lineHeight: "1.75rem",
                  color: "rgb(58, 61, 66)",
                  margin: "15px 0",
                }}
              >
                با اسنپ فود کسب و کارتان را آنلاین کنید و فروشتان را افزایش
                دهید.
              </Typography>
              <Button
                sx={{
                  height: "3rem",
                  border: "0.09375rem solid rgb(255, 0, 166)",
                  borderRadius: " 0.375rem",
                  color: "rgb(255, 255, 255)",
                  backgroundColor: "rgb(255, 0, 166)",
                  width: "auto",
                  fontWeight: "700",
                  fontSize: "1.125rem",
                  lineHeight: "1.75rem",
                  margin: "15px 0",
                  "&:hover": {
                    backgroundColor: "#ff38ac",
                    color: "white",
                  },
                }}
              >
                <RedeemIcon sx={{ marginLeft: "0.5rem", fontSize: "30px" }} />
                ثبت نام فروشندگان
              </Button>
            </Box>
            <Box sx={{ position: "absolute", top: "122px", left: "80px" }}>
              <img src={Kasbokar} alt="" />
            </Box>
          </Box>
        </Box>
        <Divider variant="fullWidth" />
        <Box sx={{ padding: "2.5rem" }}>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "1rem",
              color: "rgb(58, 61, 66)",
            }}
          >
            اسنپ فود در شهرهای ایران
          </Typography>
          <Grid container spacing={2} mt={"10px"}>
            {cities.map((city: any) => {
              return (
                <Grid item xs={1}>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: " 0.625rem",
                      cursor: "pointer",
                      color: "rgb(166, 170, 173)",
                    }}
                  >
                    {city.name}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            backgroundColor: "#f9fafb",
            padding: "50px",
            // alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <img
              src={logo}
              alt=""
              width={90}
              height={90}
              style={{ marginLeft: "40px" }}
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "1.125rem",
                  color: "rgb(255, 0, 166)",
                }}
              >
                اسنپ فود
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "0.75rem",
                  marginTop: "8px",
                  color: "rgb(83, 86, 92)",
                }}
              >
                تجربه سفارش غذا، از زودفود تا اسنپ‌فود
              </Typography>
              <Box
                sx={{
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "space-around",
                  width: "300px",
                }}
              >
                <Box
                  sx={{
                    width: "50px",
                    height: "50px ",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    border: "0.09375rem solid rgba(58, 61, 66, 0.06)",
                  }}
                >
                  <Link
                    href="#"
                    underline="none"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "50px",
                      height: "50px ",
                    }}
                  >
                    <TwitterIcon sx={{ color: "#676a70" }} />
                  </Link>
                </Box>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px ",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    border: "0.09375rem solid rgba(58, 61, 66, 0.06)",
                  }}
                >
                  <Link
                    href="#"
                    underline="none"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "50px",
                      height: "50px ",
                    }}
                  >
                    <TelegramIcon sx={{ color: "#676a70" }} />
                  </Link>
                </Box>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px ",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    border: "0.09375rem solid rgba(58, 61, 66, 0.06)",
                  }}
                >
                  <Link
                    href="#"
                    underline="none"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "50px",
                      height: "50px ",
                    }}
                  >
                    <LinkedInIcon sx={{ color: "#676a70" }} />
                  </Link>
                </Box>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px ",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    border: "0.09375rem solid rgba(58, 61, 66, 0.06)",
                  }}
                >
                  <Link
                    href="#"
                    underline="none"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "50px",
                      height: "50px ",
                    }}
                  >
                    <InstagramIcon sx={{ color: "#676a70" }} />
                  </Link>
                </Box>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px ",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    border: "0.09375rem solid rgba(58, 61, 66, 0.06)",
                  }}
                >
                  <Link
                    href="#"
                    underline="none"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "50px",
                      height: "50px ",
                    }}
                  >
                    <YouTubeIcon sx={{ color: "#676a70" }} />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Link underline="none" href="#">
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: " 0.75rem",
                  color: "rgb(58, 61, 66)",
                }}
              >
                درباره اسنپ فود
              </Typography>
            </Link>
            <Link underline="none" href="#">
              {" "}
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: " 0.75rem",
                  color: "rgb(58, 61, 66)",
                  margin: "0.5rem",
                }}
              >
                فرصل های شغلی
              </Typography>
            </Link>
            <Link underline="none" href="#">
              {" "}
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: " 0.75rem",
                  color: "rgb(58, 61, 66)",
                  margin: "0.5rem",
                }}
              >
                وبلاگ
              </Typography>
            </Link>
            <Link underline="none" href="#">
              {" "}
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: " 0.75rem",
                  color: "rgb(58, 61, 66)",
                  margin: "0.5rem",
                }}
              >
                قوانین سایت
              </Typography>
            </Link>
            <Link underline="none" href="#">
              {" "}
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: " 0.75rem",
                  color: "rgb(58, 61, 66)",
                  margin: "0.5rem",
                }}
              >
                حریم خصوصی
              </Typography>
            </Link>
            <Link underline="none" href="#">
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: " 0.75rem",
                  color: "rgb(58, 61, 66)",
                  margin: "0.5rem",
                }}
              >
                ثبت نام فروشندگان
              </Typography>
            </Link>
          </Box>
          <Box>
            <Link underline="none" href="#">
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: " 0.75rem",
                  color: "rgb(58, 61, 66)",
                }}
              >
                تماس با اسنپ فود
              </Typography>
            </Link>
            <Link underline="none" href="#">
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: " 0.75rem",
                  color: "rgb(58, 61, 66)",
                  margin: "0.5rem",
                }}
              >
                ثبت شکایات{" "}
              </Typography>
            </Link>
            <Link underline="none" href="#">
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: " 0.75rem",
                  color: "rgb(58, 61, 66)",
                  margin: "0.5rem",
                }}
              >
                ثبت شکایات{" "}
              </Typography>
            </Link>
            <Link underline="none" href="#">
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: " 0.75rem",
                  color: "rgb(58, 61, 66)",
                  margin: "0.5rem",
                }}
              >
                اپلیکیشن اسنپ فود{" "}
              </Typography>
            </Link>
          </Box>
          <Box>
            <img src={mojavez} alt="" />
          </Box>
        </Box>
      </main>
    </>
  );
}

export default Home;
