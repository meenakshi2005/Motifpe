import React, { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaUser } from 'react-icons/fa';

const testimonials = [
  {
    title:
      'Assisted us in managing unforeseen spikes in online and sales-driven transactions',
    content:
      "PayTring assisted us in managing an unforeseen surge in transaction volumes without any disruptions. They have also been supporting us with continuous monitoring, addressing service requests at all hours, and accommodating any ad hoc requirements.",
    name: 'Deepak Prasad',
    position: 'Cluster Manager , Bajaj Finserv',
  },
  {
    title:
      'Maximized efficiency and customer satisfaction through streamlined payment management',
    content:
      "PayTring has truly transformed our payment management. With their intuitive platform and comprehensive features, managing multiple payment methods and providers has become seamless. Thanks to PayTring, we've enhanced efficiency and customer satisfaction.",
    name: 'Ruchi Aggarwal',
    position: 'Founder, SimpliFin.ai',
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="bg-[#f5f8fb] py-16 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold text-[#00C48C] mb-12">
        An Unforgettable Experience <br /> That People Enjoy Recalling
      </h2>

      <div className="flex items-center justify-center relative max-w-5xl mx-auto">
        {/* Left arrow */}
        <button
          onClick={prevSlide}
          className="bg-[#00C48C] hover:bg-gray-800 text-white p-3 rounded-full absolute left-0"
        >
          <FaChevronLeft />
        </button>

        {/* Testimonial content */}
        <div className="px-8 md:px-20 transition-all duration-500 ease-in-out w-full">
          <FaQuoteLeft className="text-4xl text-gray-400 mx-auto mb-4" />
          <h3 className="text-[#00C48C] font-extrabold text-lg md:text-xl mb-4 leading-snug">
            {testimonials[current].title}
          </h3>
          <p className="text-gray-700 text-base leading-relaxed max-w-3xl mx-auto">
            "{testimonials[current].content}"
          </p>
          <div className="mt-6 flex justify-center items-center text-sm text-gray-600 space-x-2">
            <FaUser className="text-gray-700" />
            <span className="font-medium">{testimonials[current].name}</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-500">{testimonials[current].position}</span>
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={nextSlide}
          className="bg-[#00C48C] hover:bg-gray-800 text-white p-3 rounded-full absolute right-0"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="mt-8 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? 'bg-gray-500 scale-110' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
