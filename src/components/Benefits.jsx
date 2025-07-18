import React, { useState } from 'react';
import RequestDemoModal from './RequestDemoModal';

function Benefits() {
  
     const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
    <section className="py-16 px-5 text-center bg-white">
      <h2 className="text-2xl md:text-3xl font-extrabold text-[#00C48C] mb-2">
        Benefits of Cross-Border Payments with MotifPe 
      </h2>
      <p className="text-base text-gray-800 mb-12 max-w-2xl mx-auto">
        Experience hassle-free global transactions that empower your business to thrive internationally.
      </p>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
        {/* Benefit 1 */}
        <div className="text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3271/3271084.png"
            alt="Global Expansion"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-lg font-bold text-[#00C48C] mb-2">Global Expansion Made Easy</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Our payment orchestration platform simplifies cross-border transactions, helping you grow without the usual headaches.
          </p>
        </div>

        {/* Benefit 2 */}
        <div className="text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3819/3819723.png"
            alt="Support"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-lg font-bold text-[#00C48C] mb-2">Dedicated Support</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Our 24/7 expert support ensures your international transactions run smoothly.
          </p>
        </div>

        {/* Benefit 3 */}
        <div className="text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4351/4351754.png"
            alt="Comprehensive Solutions"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-lg font-bold text-[#00C48C] mb-2">Comprehensive Payment Solutions</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Whether one-time purchases or subscriptions, our solution handles all types of payments efficiently.
          </p>
        </div>

        {/* Benefit 4 */}
        <div className="text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/9452/9452396.png"
            alt="Real-Time Currency"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-lg font-bold text-[#00C48C] mb-2">Real-Time Currency Conversion</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Get transparent exchange rates with our real-time currency conversion tech—know exactly what you're getting.
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="mt-10">
        <button onClick={()=>setIsModalOpen(true)} className="bg-[#00C48C] text-white font-semibold px-6 py-3 rounded hover:bg-[#595c5b] transition">
             Learn more about cross-border benefits
        </button>
      </div>
    </section>
     <RequestDemoModal
        isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
  );
}

export default Benefits;
