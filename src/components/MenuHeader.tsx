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
import { Link } from 'react-router-dom';
import { NavData } from "./../../public/Data/NavData";

function MenuHeader() {
  return (
   <Box width={"100%"}  >
   <Box mr={"21px"} ml={"21px"}>
     <MenuList
       sx={{
         display: "flex",
         width: "100%",
         justifyContent: "space-between",
       }}
     >
       {NavData.map((data) => {
         console.log(data.img, "imgggg");
         return (
         <Link  to={`/${data.href}`}>
           <MenuItem
             sx={{
               "&:hover": {
                 backgroundColor: "white",
               },
             }}
           >
             <Box
               display={"flex"}
               flexDirection={"column"}
               alignItems={"center"}
               justifyContent={"center"}
             >
               <img
                 src={data.img}
                 alt={data.name}
                 width={"40px"}
                 height={"40px"}
               />
               <Typography
                 sx={{
                   color: " rgb(83, 86, 92)",
                   fontWeight: "400",
                   fontSize: " 0.75rem",
                   marginTop: "8px",
                 }}
               >
                 {data.name}
               </Typography>
             </Box>
           </MenuItem>
         </Link>
         );
       })}
     </MenuList>
   </Box>
 </Box>
  )
}

export default MenuHeader