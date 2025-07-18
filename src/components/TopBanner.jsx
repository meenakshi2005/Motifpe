import React from "react";
import "../assets/css/style.css"; // Make sure to include scroll animation CSS here

const TopBanner = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-[#00C48C] h-10 flex items-center z-50 overflow-hidden">
      <div className="scroll-container">
        <span className="scroll-text text-white text-sm">
          Welcome to MotifPe! Empowering smart digital transactions & seamless integration.
        </span>
      </div>
    </div>
  );
};

export default TopBanner;
