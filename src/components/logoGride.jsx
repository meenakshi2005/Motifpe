import React from "react";
// import "./logoScroll.css";

const logos = [
  "https://PayTring.com/_next/static/media/Checkout2.e28f56f1.png",
  "https://PayTring.com/_next/static/media/Paypal.b641d295.png",
  "https://PayTring.com/_next/static/media/Adyen.f4547a1f.png",
  // "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png",
  "https://PayTring.com/_next/static/media/gate2pay.d387e8b4.png",
  // "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png",
  "https://PayTring.com/_next/static/media/Cashfree.e0d4194c.png",
  "https://PayTring.com/_next/static/media/plural.618f36dd.png",
  "https://PayTring.com/_next/static/media/stripe.16620d9b.png",
  "https://PayTring.com/_next/static/media/aci-worldwide.eeb84379.png",
  "https://PayTring.com/_next/static/media/Paytabs.5e6d33c5.png",
  "https://PayTring.com/_next/static/media/ICICI-bank.d13a347b.png",
];

const logoGrid = () => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="overflow-hidden w-full bg-gray-100 py-4">
  <div className="logo-scroll flex gap-6 w-max">
    {duplicatedLogos.map((src, index) => (
      <div
        key={index}
        className="flex p-2 justify-center items-center bg-white rounded shadow-sm"
        style={{ width: "100px", height: "60px" }} // Fixed container size
      >
        <img
          src={src}
          alt={`Logo ${index}`}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>
</div>

  );
};

export default logoGrid;
