import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Container from "@mui/material/Container";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
