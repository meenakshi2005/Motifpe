import React from "react";

const RequestDemoForm = () => {
  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
      {/* Title */} 
      <h2 className="text-2xl font-bold text-center text-[#00C48C] mb-2">
        Request Demo
      </h2>
      <p className="text-center text-gray-700 mb-6">
        Request a demo of our platform and get to connect with our technical
        team for a more in-depth experience and explanation of MotifPe 
      </p>

      {/* Form */}
      <form className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="block font-medium mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#189eff]"
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block font-medium mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#189eff]"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-medium mb-1">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="Phone"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#189eff]"
          />
        </div>

        {/* Query */}
        <div>
          <label className="block font-medium mb-1">
            Query <span className="text-red-500">*</span>
          </label>
          <textarea
            rows="4"
            placeholder="Enter your query here"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#189eff]"
          ></textarea>
        </div>

        {/* Query For */}
        <div>
          <label className="block font-medium mb-1">Query For</label>
          <select className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C48C]">
            <option>MotifPe </option>
            <option>Other Product</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-[#00C48C] text-white font-semibold py-2 rounded-md hover:bg-gray-800 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestDemoForm;
