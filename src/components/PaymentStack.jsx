import React, { useState } from "react";
import RequestDemoModal from "./RequestDemoModal";

const features = [
  {
    img: "https://PayTring.com/_next/static/media/Providers.89a8d692.svg",
    title: "Payment Providers",
    desc: "You can easily choose and connect with any payment service provider (PSP) in just a few clicks. Our platform currently supports over 45+ payment gateways, both domestic and international.",
  },
  {
    img: "https://PayTring.com/_next/static/media/Methods.127747f2.svg",
    title: "Subscriptions Management",
    desc: "We manage all your subscriptions for you so you don’t have to go through the hassle of managing them yourself.",
  },
  {
    img: "https://PayTring.com/_next/static/media/Methods.127747f2.svg",
    title: "Payment Methods",
    desc: "Our payment acceptance capabilities span across the globe with support for over 100 payment methods.",
  },
  {
    img: "https://PayTring.com/_next/static/media/Transfer.bb2feb67.svg",
    title: "Payouts",
    desc: "Transfer funds to any bank account, UPI ID, debit card, credit card, or digital wallet. Simplify payouts via seamless APIs.",
  },
];

const tabs = ["Integrate", "Omni Solution", "Optimise", "Manage", "Develop"];

export default function PaymentStack() {
  
     const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
    <section className="bg-[#f4f7fc] text-center py-16 px-4 text-[#111]">
      <h2 className="text-[#00C48C] text-2xl md:text-3xl font-bold mb-3">Full payment stack</h2>
      <p className="max-w-2xl mx-auto text-base md:text-lg mb-10">
        Revolutionize your payment process with a comprehensive, seamless payment solution that streamlines your operations and enables rapid business expansion.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-14">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`px-5 py-2 rounded-full font-semibold border-2 ${
              idx === 0
                ? "bg-[#111] text-white border-[#111]"
                : "border-[#333] text-[#111]"
            } hover:bg-[#595c5b] hover:text-white hover:border-[#00C48C] transition`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid gap-16 md:gap-20 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
        {features.map((item, idx) => (
          <div key={idx} className="flex items-start gap-6 text-left">
            <img src={item.img} alt={item.title} className="w-20 h-20 object-contain" />
            <div>
              <h4 className="text-lg font-bold mb-1">{item.title}</h4>
              <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
              <a href="#" className="text-[#00C48C] font-bold text-sm">
                Read More <span className="ml-1">↪</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <button onClick={()=>setIsModalOpen(true)} className="bg-[#00C48C] text-white font-semibold px-6 py-3 rounded hover:bg-[#595c5b] transition">
            Get started with our comprehensive payment solution
        </button>
      </div>
       
    </section>
     <RequestDemoModal
        isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
  );
}
