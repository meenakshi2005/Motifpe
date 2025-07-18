import React from "react";
import image from "../assets/image.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

// You can repeat or randomize per stripe
const stripe1 = [image, image1, image2, image3];
const stripe2 = [ image, image1, image2, image3];

const LogoStripe = ({ images, reverse }) => {
  const duplicated = [...images, ...images]; // for infinite scroll

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className={`flex gap-8 animate-scroll ${reverse ? "animate-scroll-reverse" : ""}`}
      >
        {duplicated.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`stripe-img-${index}`}
            className="h-15 w-auto"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

const LogoGridStripe = () => {
  return (
    <div className="space-y-6 bg-gray-100 py-10">
      <LogoStripe images={stripe1} />
      <LogoStripe images={stripe2} reverse />
    </div>
  );
};

export default LogoGridStripe;
