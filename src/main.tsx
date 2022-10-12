import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { CssBaseline, Container } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <React.Fragment>
      <CssBaseline />
      <Container>
        <App />
      </Container>
    </React.Fragment>
  </React.StrictMode>
);
