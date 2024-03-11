import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./lib/theme.tsx";
import RTL from "./components/RTL.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {/* <RTL> */}
          <App />
        {/* </RTL> */}
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
