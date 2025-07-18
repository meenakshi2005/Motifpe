import React, { useState } from "react";
import RequestDemoModal from "./RequestDemoModal";

const benefits = [
  {
    title: "Effortless Integration",
    img: "https://PayTring.com/_next/static/media/seamless_integration.045e4b8c.svg",
    desc: "Seamlessly integrate with our software development kits (SDKs) and extensions, without the need for complex coding or customization.",
  },
  {
    title: "Cost and Revenue optimization",
    img: "https://PayTring.com/_next/static/media/cost_revenue_optimisation.ea61f69b.svg",
    desc: "Reduce MDR costs with competitive rates from 20+ payment gateways and aggregators.",
  },
  {
    title: "Better Conversions",
    img: "https://PayTring.com/_next/static/media/conversions.c8c21af0.svg",
    desc: "Lower your failure rate using dynamic rules and AI-powered intelligent routing.",
  },
  {
    title: "Infinite Scalability",
    img: "https://PayTring.com/_next/static/media/PayTring-scalablity.f0fe8eab.svg",
    desc: "Integrate with us once and gain access to 45+ payment gateways, with optimal performance, security, and reliability.",
  },
];

export default function WhyMotifPe() {
  
     const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
    <section className="bg-[#f5f9ff] text-center px-4 py-16 text-[#111]">
      <h2 className="text-2xl md:text-3xl font-extrabold text-[#00C48C] mb-4">Why MotifPe ?</h2>
      <p className="max-w-3xl mx-auto text-base md:text-lg mb-12">
        Achieve faster and more secure transactions, improved payment success rates, and enhanced control over payment-related data and analytics by streamlining your payment processes with us.
      </p>

      <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-4 text-left max-w-7xl mx-auto">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="space-y-4 px-2">
            <img src={benefit.img} alt={benefit.title} className="h-14" />
            <h3 className="text-[#00C48C] text-lg font-bold">{benefit.title}</h3>
            <p className="text-sm text-gray-700">{benefit.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <button onClick={()=>setIsModalOpen(true)} className="bg-[#00C48C] text-white font-semibold px-6 py-3 rounded hover:bg-[#595c5b] transition">
            Discover the benefits of MotifPe
        </button>
      </div>
      
    </section>
     <RequestDemoModal
        isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
