import React, { useState } from "react";
import RequestDemoModal from "./RequestDemoModal";

const reasons = [
  {
    icon: "fas fa-cube text-blue-500",
    title: "Global Reach",
    desc: "Tap into international markets effortlessly. Our system supports transactions in over 100+ currencies, allowing you to reach customers worldwide.",
  },
  {
    icon: "fas fa-rocket text-purple-500",
    title: "Reduced Costs",
    desc: "Save on international transaction fees with our competitive exchange rates and low-cost payment processing.",
  },
  {
    icon: "fas fa-bolt text-yellow-500",
    title: "Enhanced Security",
    desc: "MotifPe  prioritizes your data with top-tier security and global compliance, including PCI DSS Level 1 certification.",
  },
  {
    icon: "fas fa-gears text-green-500",
    title: "Streamlined Integration",
    desc: "Easily integrate with your existing e-commerce platforms. Our solution is designed for a hassle-free setup.",
  },
];

export default function WhyCrossBorder() {
  
     const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
    <section className="text-center px-5 py-16 bg-[#f5f9ff] text-[#111]">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#00C48C] mb-12">
        Why Choose MotifPe  for Cross-Border Payments?
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto text-left">
        {reasons.map((reason, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
          >
            <i className={`${reason.icon} text-4xl mb-4 block`}></i>
            <h3 className="text-lg font-semibold text-[#00C48C] mb-2">
              {reason.title}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">{reason.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <button onClick={()=>setIsModalOpen(true)} className="bg-[#00C48C] text-white font-semibold px-6 py-3 rounded hover:bg-[#595c5b] transition">
             See how we simplify cross-border payments
        </button>
      </div>
      
    </section>
     <RequestDemoModal
        isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
