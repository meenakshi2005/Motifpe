import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import TopBanner from "./components/TopBanner";
import About from './components/about';
import Contact from "./components/Contact";
import FaqSection from "./components/FaqSection";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";


const App = () => {
  
  return (
    <>
      <TopBanner />
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
         <Route path="/contact" element={<Contact />} /> 
         <Route path="/faqSection" element={<FaqSection />} /> 
         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
         <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
    
    </>
  );
};

export default App;
