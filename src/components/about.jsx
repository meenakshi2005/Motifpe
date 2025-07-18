import React from "react";
import TestimonialSection from "./TestimonialSection";
import MissionVision from "./MissionVision";
import Ready from "./Ready";
import InvestorsSection from "./InvestorsSection";
import Footer from "./footer";

const AboutUs = ({ gtv, successRate }) => {
  return (
    <div>
    <section className="bg-[#f5f8fc] text-center py-16 px-4">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#00C48C] mb-6">
        About Us
      </h2>

      {/* Paragraph 1 */}
      <p className="max-w-4xl mx-auto text-gray-700 text-sm md:text-base leading-6 mb-4">
        Welcome to our world of innovation and seamless financial transactions!
        Founded by two technopreneurs with extensive experience in the payments
        and fintech industry, we are a fintech product development company. Our
        mission is to eliminate the barriers that exist in the financial
        industry and make financial transactions accessible to all individuals
        and businesses worldwide. For the past six years, we have been working
        with major payment aggregators and gateways in India, developing
        products that their customers and banks demand.
      </p>

      {/* Paragraph 2 */}
      <p className="max-w-4xl mx-auto text-gray-700 text-sm md:text-base leading-6 mb-4">
        Our product evolved from the problems, ideas, and demands we received
        from these companies' customers. We have built a super product by
        identifying all the major problems that every online business is facing
        these days. At our company, we provide a No-Code Solution for payment
        collection, making integration super easy. You don't need a developer's
        help to integrate and manage multiple payment gateways on your website
        or mobile app. Plus, merchants can route MDR as per their requirements,
        solving the biggest problem and saving costs for large merchants. Our
        cutting-edge technology provides a seamless, secure, and effortless
        experience for everyone. We're excited to revolutionize the financial
        transaction platform and make it accessible to all.
      </p>

      {/* Stats Section */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {/* Payment Gateways */}
        <div className="bg-white shadow-md rounded-md p-6">
          <div className="text-3xl mb-2">🌐</div>
          <p className="text-[#00C48C] font-bold text-xl">45+</p>
          <p className="text-sm text-gray-600">Payment Gateway</p>
        </div>

        {/* Transactions */}
        <div className="bg-white shadow-md rounded-md p-6">
          <div className="text-3xl mb-2">📦</div>
          <p className="text-[#00C48C]  font-bold text-xl">13M</p>
          <p className="text-sm text-gray-600">Transactions</p>
        </div>

        {/* GTV */}
        <div className="bg-white shadow-md rounded-md p-6">
          <div className="text-3xl mb-2">₹</div>
          <p className="text-[#00C48C]  font-bold text-xl">
            750M
            {/* {Number(gtv).toLocaleString()}M */}
          </p>
          <p className="text-sm text-gray-600">GTV</p>
        </div>

        {/* Success Rate */}
        <div className="bg-white shadow-md rounded-md p-6">
          <div className="text-3xl mb-2">🚀</div>
          <p className="text-[#00C48C]  font-bold text-xl">
            98.33%
            {/* {Number(successRate).toFixed(2)}% */}
          </p>
          <p className="text-sm text-gray-600">Success Rate</p>
        </div>
      </div>
    </section>
    <MissionVision />
      <TestimonialSection />
      <InvestorsSection />
      <Ready />
      <Footer />
      </div>
  );
};

export default AboutUs;
