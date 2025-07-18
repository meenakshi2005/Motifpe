import React, { useState } from 'react';
import FaqSection from './FaqSection';
import ContactForm from './ContactForm';
import Footer from './footer';
import Ready from './Ready';

const Contact = () => {
  const [selectedCompany, setSelectedCompany] = useState("MotifPe ");

  const companies = ["MotifPe ", "Stripe", "Razorpay", "PayU", "Cashfree"];

  return (
    <div>
    <div className="min-h-screen bg-[#f7faff] p-6 md:p-12">
      <h1 className="text-3xl md:text-4xl font-bold text-[#00C48C] mb-8 flex flex-wrap items-center gap-2">
        Hi, I'm Looking For
        <select
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
          className="bg-white border border-gray-300 rounded px-5 py-1 text-gray-500  text-sm"
        >
          {companies.map((company) => (
            <option key={company} value={company}>
              {company}
            </option>
          ))}
        </select>
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        <FaqSection selectedCompany={selectedCompany} />
        <ContactForm />
      </div>
       <section className="bg-[#f7fafd] text-gray-800 px-[5%] py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <h2 className="text-2xl font-bold text-[#00C48C] mb-4">
            Not sure what you’re looking for?
          </h2>
          <p className="text-lg">
            Send us an email on{" "}
            <span className="font-bold text-black">Info@MotifPe.com</span> and
            we will get back to you.
          </p>
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-2xl font-bold text-[#00C48C] mb-6">Visit Us At</h2>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-1">Corporate Office</h3>
            <p>
              ConsultIT House, TECHZONE 7, IT Plots, Plot 20, West, opposite Bloom International School, Milak Lachchhi, Greater Noida, Uttar Pradesh 203207
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1">Registered Office</h3>
            <p>
              ConsultIT Pvt Ltd <br />
              2nd Floor, Plot No. 20, Uttar Pradesh 203207
            </p>
          </div>
        </div>
      </div>
    </section>
      <Ready />
    </div>
     <Footer />
    </div>
  );
};

export default Contact;
