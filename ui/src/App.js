import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/HomePage/Home";
import Contact from "./components/Pages/ContactPage/Contact";
import Services from "./components/Pages/ServicesPage/Services";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  const ErrorPage = () => {
    window.location.href = "/home";
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black",
      }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
