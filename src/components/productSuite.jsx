import React from "react";

const products = [
  {
    title: "AI Payment Router",
    description:
      "Harness the power of AI to intelligently route transactions across payment gateways for optimal success rates, speed, and cost-efficiency — no coding required.",
  },
  {
    title: "MotifPe Express Checkout",
    description:
      "Revolutionize your checkout with a blazing-fast, one-click solution built for mobile-first e-commerce experiences. Transactions completed in under 10 seconds.",
    link: "Know More",
  },
  {
    title: "Tap & Pay Suite",
    description:
      "Enable tap-to-pay capabilities with our NFC-powered MPOS and SoftPOS applications, designed for quick deployment and minimal hardware dependency.",
  },
  {
    title: "Unified Commerce Hub",
    description:
      "A single dashboard for managing orders, inventory, and payments — perfect for D2C brands and multi-location retailers looking for centralized control.",
  },
  {
    title: "CardTop-Up Gateway",
    description:
      "Recharge prepaid and forex cards across supported banks with a unified platform, equipped with automated reconciliation and wallet management tools.",
  },
  {
    title: "Usage-Based Billing Engine",
    description:
      "Deploy flexible pricing models with our API-first, headless billing engine. Ideal for SaaS and utilities, supporting real-time metering and invoicing.",
  }
]


export default function ProductSuite() {
  return (
    <div>
    <section className="bg-[#1f2733] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div className="flex-1 lg:max-w-sm">
          <h2 className="text-4xl font-extrabold leading-tight">
            The <span className="text-[#00C48C]">MotifPe </span><br />Product Suite
          </h2>
          <button className="mt-8 bg-[#00C48C] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#595c5b] transition">
            Explore our MotifPe  product suite
          </button>
        </div>

        {/* Right Section - Product Cards */}
        <div className="flex-[2] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="border border-gray-600 p-5 rounded-md hover:shadow-lg transition"
            >
              <h3 className="text-[#00C48C] font-semibold text-lg mb-2">
                {product.title}
              </h3>
              <p className="text-sm text-gray-300">
                {product.description}
                {product.link && (
                  <span className="text-[#00C48C] font-medium block mt-1 cursor-pointer hover:underline">
                    {product.link}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  
  );
}
