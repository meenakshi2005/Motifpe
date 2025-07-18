import React, { useState } from "react";
import PartnersSection from "./PartnersSection";
import PaymentStack from "./PaymentStack";
import SubscribeSection from "./SubscribeSection";
import WhyMotifPe  from "./WhyMotifPe";
import WhyCrossBorder from "./whyCrossBorder";
import Benefits from "./Benefits";
import ProductSuite from "./productSuite";
import OrchestrationPlatform from "./OrchestrationPlatform"
import Footer from "./footer"
import TestimonialSection from "./TestimonialSection";

// import { Form } from "react-router-dom";
import Ready from "./Ready";
import RequestDemoModal from "./RequestDemoModal";
import { Link } from "react-router-dom";

const Home = () => {
     const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <section className="relative min-h-[90vh] bg-[#1B1F23] px-20 py-24">
      <div className="absolute inset-0 bg-transparent z-0"></div>

      <div className="relative z-10 max-w-2xl text-white">
        <h1 className="text-4xl md:text-5xl font-semibold leading-snug">
          <span className="text-[#00C48C]">Payment orchestration</span> platform for<br />
          <strong>all types of business</strong>
        </h1>

        <p className="mt-5 text-lg text-gray-300 leading-relaxed">
          MotifPe  is a universal feature-rich{' '}
          <span className="text-[#00C48C]">payment orchestration platform</span> for online businesses
          and payment institutions. We integrate payment providers and acquirers to bring a unified
          communication, control, and management interface.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button onClick={()=>setIsModalOpen(true)} className="bg-[#00C48C] text-white font-semibold px-6 py-3 rounded hover:bg-[#595c5b] transition">
            Request Demo
          </button>
          <button className="bg-transparent border border-gray-300 text-white font-semibold px-6 py-3 rounded hover:bg-gray-700 transition">
           {/* <Link to={/} Contact Us */}
           <Link to="/contact">Contact Us</Link>
          </button>
        </div>
      </div>
    </section>
    <PartnersSection />
      <PaymentStack />
         <SubscribeSection />
           <WhyMotifPe  />
            <WhyCrossBorder />
                 <Benefits />
                     <ProductSuite />
                      <OrchestrationPlatform />
      <TestimonialSection />
      <Ready />
    
                     <Footer />
                      <RequestDemoModal
        isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                     
    </div>
  );
};

export default Home;
