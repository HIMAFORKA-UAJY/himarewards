import Header from "./components/Header";
import Table from "./components/Table";
import Footer from "./components/Footer";
import { Container } from "@mui/material";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Table />
      </Container>
      <Footer />
    </>
  );
};

export default App;
