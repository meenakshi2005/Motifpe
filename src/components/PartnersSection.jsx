// components/PartnersSection.jsx
import { useState } from "react";
import LogoGrid from "./logoGride";
import LogoGrides from "./logogrides";
import RequestDemoModal from "./RequestDemoModal";

const PartnersSection = () => {
  
     const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="py-10"><LogoGrid />
    <section className="bg-[#f4f9ff] px-5 py-10 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        <span className="text-[#00C48C]">What is MotifPe ?</span>
      </h2>
      <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed mb-10">
        MotifPe  is an all-inclusive and feature-packed payment orchestration platform
        designed for OMNI businesses and payment institutions. Our platform integrates
        payment providers and acquirers from all over the world, offering a unified
        communication, control, and management interface.
      </p>
{/* <LogoGrid /> */}
<LogoGrides/>
      <div className="mt-10">
         <button onClick={()=>setIsModalOpen(true)} className="bg-[#00C48C] text-white font-semibold px-6 py-3 rounded hover:bg-[#595c5b] transition">
            Request Demo
        </button>
      </div>
    </section>
      <RequestDemoModal
        isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default PartnersSection;
