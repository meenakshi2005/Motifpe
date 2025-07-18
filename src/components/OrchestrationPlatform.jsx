import React, { useState } from 'react';
import {
  FaRandom,
  FaTachometerAlt,
  FaShieldAlt,
  FaCreditCard,
} from 'react-icons/fa';
import RequestDemoModal from './RequestDemoModal';
// import './scrollingCards.css'; // External CSS for animation

const cardData = [
  {
    icon: <FaRandom className="text-white text-lg" />,
    title:
      'Optimize your transaction costs by leveraging the capability to automatically',
    bold: 'identify the most cost-effective approach',
  },
  {
    icon: <FaTachometerAlt className="text-white text-lg" />,
    title: 'With',
    bold: 'a single dashboard, you can manage all',
    subtitle:
      ' payment and payout processes in real-time and configure multiple settings.',
  },
  {
    icon: <FaTachometerAlt className="text-white text-lg" />,
    title: 'With',
    bold: 'a single dashboard, you can manage all',
    subtitle:
      ' payment and payout processes in real-time and configure multiple settings.',
  },
  {
    icon: <FaShieldAlt className="text-white text-lg" />,
    title:
      'Count on our reliable and secure distributed payment infrastructure that is',
    bold: 'shielded from all types and sizes of DDoS attacks.',
  },
  {
    icon: <FaCreditCard className="text-white text-lg" />,
    title: 'Our single integration can help you steer clear',
    bold: 'of being tied down to a specific payment service provider',
    subtitle: ' and also reveal capabilities.',
  },
  {
    icon: <FaTachometerAlt className="text-white text-lg" />,
    title: 'With',
    bold: 'a single dashboard, you can manage all',
    subtitle:
      ' payment and payout processes in real-time and configure multiple settings.',
  },
];

export default function ScrollingCards() {
  // Duplicate cards for seamless loop
  const marqueeData = [...cardData, ...cardData];
  
     const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
    <section className="bg-[#f7f9fb] py-10 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#00C48C] mb-4">
          Payment Orchestration Platform For All
        </h2>
        <p className="text-gray-800 mb-10 max-w-3xl mx-auto">
          Achieve faster and more secure transactions, improved payment success rates, and enhanced
          control over payment-related data and analytics by streamlining your payment processes with us.
        </p>
      </div>

      <div className="overflow-hidden relative">
        <div className="scrolling-marquee flex w-max gap-6">
          {marqueeData.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-white border border-gray-200 rounded-lg shadow-sm p-5"
            >
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <p className="text-sm text-gray-800 leading-relaxed">
                {item.title}{' '}
                <span className="font-semibold text-black">
                  {item.bold}
                </span>
                {item.subtitle && (
                  <span className="text-gray-700"> {item.subtitle}</span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <button onClick={()=>setIsModalOpen(true)} className="bg-[#00C48C] text-white font-semibold px-6 py-3 rounded hover:bg-[#595c5b] transition">
            Join the payment revolution
        </button>
      </div>
    </section>
     <RequestDemoModal
        isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
