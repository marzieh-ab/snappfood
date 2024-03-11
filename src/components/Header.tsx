import React from 'react'
import {
 Box,
 Grid,
 Typography,
 TextField,
 InputAdornment,
 Button,
 MenuList,
 MenuItem,

} from "@mui/material";

import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import RedeemIcon from "@mui/icons-material/Redeem";
import logo from "./../../public/images/logo.png";



function Header({placeholder}) {
  return (
   <header
   style={{
     position: "sticky",
     top: "0px",
     right: "0px",
     left: "0px",
     
     zIndex: "1",
    height:"auto",
     width: "100%",
     backgroundColor: "white",
     transition: "all 0.3s ease-out 0s",
   }}
 >
   <Box>
     <Grid
       container
       alignItems={"center"}
       width={"100%"}
       justifyContent={"space-around"}
     >
       <Grid item>
         <img src={logo} alt="" width={80} height={80} />
       </Grid>
       <Grid item>
         <Box
           sx={{
             display: "flex",
             alignItems: "center",
             cursor: "pointer",
           }}
         >
           <Box>
             <DonutSmallOutlinedIcon
               sx={{ fontSize: "20px", color: "#d1d2d2" }}
             />
           </Box>
           <Box mr={1}>
             <Typography
               sx={{
                 color: "rgb(58, 61, 66)",
                 fontWeight: "700",
                 fontSize: "0.875rem",
                 lineHeight: "1.25rem",
               }}
             >
               ادرس انتخابی
             </Typography>
             <Box display={"flex"} alignItems={"center"}>
               <Typography
                 sx={{
                   color: "#d1d2d2",
                   fontWeight: "400",
                   fontSize: "0.625rem",
                   lineHeight: "1.25rem",
                 }}
               >
                 تهران عباس اباد میرزایی زینالی تقاطع علی اکبری
               </Typography>
               <ExpandMoreIcon
                 sx={{
                   color: "#ff00a6",
                   fontSize: "19px",
                   marginRight: "10px",
                 }}
               />
             </Box>
           </Box>
         </Box>
       </Grid>
       <Grid item>
         <TextField
           type="text"
           variant="standard"
           sx={{
             width: "400px",
             backgroundColor: "rgb(235, 237, 240)",
             borderRadius: "0.625rem;",
             padding: "10px",
             fontSize: "12px",
             marginRight: "30px",
           }}
           InputProps={{
             disableUnderline: true,
             startAdornment: (
               <InputAdornment position="start">
                 <SearchIcon
                   sx={{ color: "#b6babd", marginLeft: "5px" }}
                 />
               </InputAdornment>
             ),
           }}
           placeholder={`جست وجو در${placeholder}`}
          
         />
       </Grid>
       <Grid item marginRight={"50px"}>
         <Box display={"flex"} alignItems={"center"}>
           <RedeemIcon
             sx={{
               fontSize: "28px",
               marginRight: "100px",
               cursor: "pointer",
             }}
           />
           <Typography
             sx={{
               fontWeight: "400",
               fontSize: "0.875rem",
               lineHeight: "1.25rem",
               width: "auto",
               height: "auto",
               color: " rgb(58, 61, 66)",
               marginRight: "12px",
               marginLeft: "15px",
               cursor: "pointer",
             }}
           >
             ثبت نام فروشندگان
           </Typography>
           <Button
             sx={{
               fontSize: "1.125rem",
               fontWeight: "700",
               backgroundColor: "#ff00a6",
               width: "auto",
               height: "3rem",
               color: "white",
               border: "0.09375rem solid rgb(255, 0, 166)",
               marginRight: "20px",
               "&:hover": {
                 backgroundColor: "#ff00a6",
                 boxShadow: "none",
                 color: "white",
               },
             }}
           >
             ورود یا عضویت
           </Button>
         </Box>
       </Grid>
     </Grid>
   </Box>
 
 </header>
  )
}

export default Header