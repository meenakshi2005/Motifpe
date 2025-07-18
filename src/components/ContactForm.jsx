import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 max-h-[90vh] overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">How do we get in touch with you?</h2>

      <form className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-sm text-gray-700 font-medium">Full Name</label>
          <input
            type="text"
            placeholder="Enter Full Name"
            className="w-full mt-1 px-3 py-2  border rounded outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm text-gray-700 font-medium">Email Address</label>
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full mt-1 px-3 py-2 border rounded outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-700 text-sm font-medium">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter Phone Number"
            className="w-full mt-1 px-3 py-2 border rounded outline-none"
          />
        </div>

        {/* Company Info */}
        <h3 className="text-md font-semibold text-gray-700 mt-6 mb-2">Share your company's details</h3>

        {/* Company Name */}
        <div>
          <label className="block text-sm text-gray-700 font-medium">Company Name</label>
          <input
            type="text"
            placeholder="Enter Company Name"
            className="w-full mt-1 px-3 py-2 border rounded outline-none"
          />
        </div>

        {/* Company Website */}
        <div>
          <label className="block text-sm text-gray-700 font-medium">Company Website</label>
          <input
            type="url"
            placeholder="Enter Company Website"
            className="w-full mt-1 px-3 py-2 border rounded outline-none"
          />
        </div>

        {/* GMV */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mt-4">
            What is the expected GMV of your business (in ₹)?
          </label>
          <select className="w-full mt-1 px-3 py-2 border rounded outline-none">
            <option>Select GMV</option>
            <option>Less than ₹1L/month</option>
            <option>₹1L - ₹10L/month</option>
            <option>₹10L - ₹50L/month</option>
            <option>More than ₹50L/month</option>
          </select>
        </div>

        {/* Payment Aggregator */}
        <div>
          <label className="block text-sm text-gray-700 font-medium">Choose Payment Aggregator</label>
          <select className="w-full mt-1 px-3 text-gray-500 py-2 border rounded outline-none">
            <option>Select Aggregator</option>
            <option>Razorpay</option>
            <option>Cashfree</option>
            <option>PayU</option>
            <option>Stripe</option>
            <option>Other</option>
          </select>
        </div>

        {/* Your Query */}
        <div>
          <label className="block text-gray-700 text-sm font-medium">Your Query</label>
          <textarea
            rows={3}
            placeholder="Write a brief description of your query"
            className="w-full mt-1 px-3 py-2 text-gray-600 border rounded outline-none resize-none"
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full mt-4 bg-[#00C48C] hover:bg-[#009b6a] text-white font-semibold py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
