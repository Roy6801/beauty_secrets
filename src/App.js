import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/HomePage/Home";
import Contact from "./components/Pages/ContactPage/Contact";
import Services from "./components/Pages/ServicesPage/Services";
import Navbar from "./components/Navbar/Navbar";
import { Box } from "@mui/material";

const App = () => {
  const ErrorPage = () => {
    window.location.href = "/";
  };

  return (
    <Box
      sx={{
        p: { xs: 0.1, sm: 0.5, md: 1, lg: 2 },
        backgroundColor: "yellow",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default App;
