import React from "react";

// Example logo imports (replace with actual paths in your project)
import StartupReseau from "../assets/startup_reseau.png";
import Wadhwani from "../assets/wadhwani.png";
// import StartupIndia from "../assets/startup_india.png";
import Tenity from "../assets/tenity.png";
// import Unlimit from "../assets/unlimit.png";

const InvestorsSection = () => {
  return (
    <section className="bg-[#f5f8fc] py-6 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#00C48C] mb-4">
          Our Investors and Backers
        </h2>
        <p className="text-gray-700 text-sm md:text-base leading-6 mb-10">
          MotifPe  was founded by experienced entrepreneurs who personally experienced the
          challenges of navigating payment companies and banks. With the backing of renowned
          partners and industry experts, we provide innovative solutions that simplify financial
          transactions and empower our customers. Our goal is to create a more seamless and
          accessible payment ecosystem for all.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-10">
          <img src={StartupReseau} alt="Startup Reseau" className="h-16 md:h-20 m-2" />
          <img src={Wadhwani} alt="Wadhwani Foundation" className="h-12 md:h-16 m-2" />
          <img src={StartupReseau} alt="Startup Reseau" className="h-16 md:h-20 m-2" />
          <img src={Tenity} alt="Tenity" className="h-12 md:h-16 m-2" />
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;
