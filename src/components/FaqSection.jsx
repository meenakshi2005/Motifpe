import React, { useState } from "react";

const faqs = [
  {
    question: "What is MotifPe ?",
    answer:
      "MotifPe  is a comprehensive payment orchestration platform that integrates with a wide range of payment gateways, aggregators, and methods. Our platform simplifies the management of all payment-related tasks and data by consolidating them onto a single, user-friendly interface. With MotifPe , you can save valuable time and effort by avoiding the need to navigate multiple dashboards and panels.",
  },
  {
    question: "How can I start accepting payments through MotifPe ?",
    answer: "To start accepting payments, you need to register, configure your gateways, and integrate with your platform using our APIs.",
  },
  {
    question: "What are the payment modes available on MotifPe ?",
    answer: "MotifPe  supports cards, net banking, UPI, wallets, and more.",
  },
  {
    question: "Which payment gateway service providers are supported on MotifPe ?",
    answer: "MotifPe  supports providers like Razorpay, PayU, Stripe, and more.",
  },
  {
    question: "Does MotifPe  support offline QRs and POS machines as well?",
    answer: "Yes, MotifPe  supports both offline QR and POS machine integrations.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="m-4 ">
      <h2 className="text-xl font-bold mb-6">Popular Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border border-[#00C48C]  mb-4 rounded">
          <button
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            className="w-full text-left p-4 font-semibold text-black flex justify-between items-center"
          >
            {faq.question}
            <span>{openIndex === index ? "▲" : "▼"}</span>
          </button>
          {openIndex === index && (
            <div className="bg-[#f0f8ff] p-4 border-t border-[#00C48C] text-sm text-gray-700">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
      <p className="text-sm mt-6">
        Want to check more Q&A?{" "}
        <a href="#" className="text-[#00C48C] font-semibold">
          Click Here
        </a>
      </p>
    </div>
  );
};

export default FaqSection;
