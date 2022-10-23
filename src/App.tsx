import { FC } from "react";

import Header from "./components/Header";
import Table from "./components/Table";
import Footer from "./components/Footer";
import { Container, Stack } from "@mui/material";

const App: FC = () => {
  return (
    <>
      <Container>
        <Stack alignItems={"center"} justifyContent={"center"} padding={2} spacing={2}>
          <Header />
          <Table />
          <Footer />
        </Stack>
      </Container>
    </>
  );
};

export default App;
