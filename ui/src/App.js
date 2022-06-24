import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/HomePage/Home";
import Contact from "./components/Pages/ContactPage/Contact";
import Services from "./components/Pages/ServicesPage/Services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./index.css";
import "./styles/navbar.css";
import "./styles/footer.css";
import "./styles/home/hero.css";
import "./styles/home/intro.css";
import "./styles/home/insta.css";
import "./styles/home/review.css";
import "./styles/home/reviewcard.css";
import "./styles/contact/hero3.css";
import "./styles/contact/reach.css";
import "./styles/contact/timing.css";

const App = () => {
  const ErrorPage = () => {
    window.location.href = "/home";
  };

  const [resized, setResized] = useState(
    window.innerWidth < 640 ? false : true
  );

  const updateResized = () => {
    if (window.innerWidth < 640) {
      setResized(false);
    } else {
      setResized(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateResized);
    return () => window.removeEventListener("resize");
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
