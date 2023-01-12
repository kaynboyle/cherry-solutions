import React, { FC } from "react";
import "./App.css";
import "./index.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Consulting from "./components/Consulting";
import Software from "./components/Software"
import AboutUs from "./components/AboutUs";

const App: FC = () => {
  return (
    <div className="App">
      <Router>
        <header className="App-header" id="bar">
          {/* header is the only constant */}
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/software" element={<Software/>} />
          <Route path="/about-us" element={<AboutUs/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
