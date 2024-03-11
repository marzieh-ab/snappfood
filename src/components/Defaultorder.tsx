import React, { useRef } from "react";
import { Box, TextField, IconButton, Paper } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const options = [
  "بالاترین امتیاز",
  " نزدیک ترین",
  "جدیدترین ",
  "ارزان ترین ",
  " عملکرد کلی",
  " گران ترین",
];

function Defaultorder() {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

 

  return (
    <Box
      sx={{
        padding: "1.5rem",
        display: "flex",
        marginBottom: "2rem",
        width: "100%",
      }}
    >
      <Box sx={{ flex: 1 }}></Box>
      <Box >
        <Autocomplete
        
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
  
          id="controllable-states-demo"
          options={options}
          sx={{ width: 200 }}
          PaperComponent={({ children }) => (
            <Paper
              style={{
                border: "1px solid #ccc",
                maxHeight: "auto",
                
              }}
            >
              {children}
            </Paper>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{
                p: 0,
                color: "rgb(128, 128, 128)",
                fontSize: "10px",
              }}
              autoComplete="off"
              inputRef={inputRef}
              InputProps={{
                ...params.InputProps,
                placeholder: "به صورت پیش فرض",
               
              }}
            />
          )}
        />
      </Box>
    </Box>
  );
}

export default Defaultorder;
