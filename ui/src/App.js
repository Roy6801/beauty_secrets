import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/HomePage/Home";
import Contact from "./components/Pages/ContactPage/Contact";
import Services from "./components/Pages/ServicesPage/Services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Privacy from "./components/Pages/Privacy";
import "./index.css";
import "./styles/hero.css";
import "./styles/intro.css";
import "./styles/insta.css";
import "./styles/review.css";
import "./styles/reviewcard.css";
import "./styles/footer.css";

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
        {/* <Route path="/privacy" element={<Privacy />} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
