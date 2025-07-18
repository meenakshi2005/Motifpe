import React from "react";
import { FaBrain, FaLightbulb } from "react-icons/fa";

const MissionVision = () => {
  return (
    <section className="bg-[#f5f8fc] py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Our Mission (2/3 width on desktop) */}
        <div className="md:col-span-2 bg-[#00C48C] text-white rounded-lg p-8 shadow-lg">
          <div className="text-4xl mb-4">
            <FaBrain className="inline-block text-white bg-minty-100 p-2 rounded-full text-5xl" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-sm md:text-base leading-6">
            Our mission is to create an innovative financial transaction platform that leverages
            cutting-edge technology to provide a seamless, secure, and effortless experience for
            everyone. We aim to eliminate the barriers that currently exist in the financial industry
            and make financial transactions accessible to all individuals and businesses worldwide.
            We are committed to delivering reliable, efficient, and user-friendly solutions that
            empower our customers to manage their finances with ease and confidence. Through our
            mission, we aspire to transform the way people exchange money and conduct financial
            transactions, creating a more connected and prosperous world.
          </p>
        </div>

        {/* Our Vision (1/3 width on desktop) */}
        <div className="md:col-span-1 bg-[#2e333a] text-white rounded-lg p-8 shadow-lg">
          <div className="text-4xl mb-4">
            <FaLightbulb className="inline-block text-white bg-slate-700 p-2 rounded-full text-5xl" />
          </div>
          <h3 className="text-2xl font-bold text-[#00C48C] mb-4">Our Vision</h3>
          <p className="text-sm md:text-base leading-6">
            To leverage technology and innovation to transform financial transactions into a
            seamless, secure, and effortless experience for all.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
