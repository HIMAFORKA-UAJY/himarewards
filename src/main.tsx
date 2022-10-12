import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { CssBaseline, Container, Typography, Box } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <React.Fragment>
      <CssBaseline />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding="12px"
      >
        <img src="/assets/images/logo.png" alt="Logo HIMAFORKA" width="180" />
        <Typography variant="h4">
          Leaderboard HIMA Rewards
        </Typography>
        <div>
          HIMA Rewards merupakan program kerja dari Himaforka UAJY yang bertujuan untuk menghitung jumlah poin yang dikumpulkan oleh mahasiswa informatika yang aktif dan ikut berpartisipasi dalam kegiatan yang di adakan oleh Himaforka.
        </div>
      </Box>
      <Container>
        <App />
      </Container>
    </React.Fragment>
  </React.StrictMode>
);
