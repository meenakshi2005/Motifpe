import React, { useState } from 'react'
import RequestDemoModal from './RequestDemoModal';
import { Link } from 'react-router-dom';

function Ready() {
    const [isModalOpen, setIsModalOpen] = useState(false);
   return (
    <section className="rounded-xl shadow-md py-8 m-10 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 mt-10">
      <div>
        <h2 className="text-xl md:text-2xl font-extrabold text-gray-800">
          Are you ready to take your business to the next level?
        </h2>
        <p className="text-gray-500 mt-1">
          Contact us and we will strive to offer you the most appropriate deal.
        </p>
      </div>

      <div className="flex space-x-4">
        <button onClick={()=>setIsModalOpen(true)} className="bg-[#00C48C] hover:bg-gray-800 text-white font-semibold py-2 px-5 rounded-md transition">
          Request Demo
        </button>
        <button className="bg-gray-800 hover:bg-[#595c5b] text-white font-semibold py-2 px-5 rounded-md transition">
      <Link to="/contact">Contact Us</Link>
        </button>
      </div>
       <RequestDemoModal
        isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );

}

export default Ready;