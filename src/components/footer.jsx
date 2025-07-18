import React from "react";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
const Footer = () => {
  // const logos = [
  //   "aws.png",
  //   "pci.png",
  //   "azure.png",
  //   "visa.png",
  //   "mastercard.png",
  //   "cloudflare.png",
  //   "gpay.png",
  //   "iso27001.png",
  // ];
  const logos = [
    { src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", alt: "AWS" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/2/27/PCI-DSS-logo.svg", alt: "PCI DSS" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg", alt: "Azure" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png", alt: "Visa" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg", alt: "Mastercard" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Cloudflare_Logo.png", alt: "Cloudflare" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg", alt: "GPay" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/1/1e/ISO_IEC_27001_Certified.svg", alt: "ISO 27001" },
  ];
  return (
    <footer className="bg-[#2e333a] text-white px-[5%] py-12 text-sm">
      {/* Top Section */}
 <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="h-10 mb-6 " />
        {/* <span className="text-[#00C48C] text-2xl font-bold">MotifPe</span> */}
      </div>
      <div className="max-w-[1290px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 - Logo + Links */}
        <div>
          <h3 className="text-lg font-bold text-[#00C48C] mb-4">Useful Links</h3>
          <ul className="space-y-2 font-semibold">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link to="/faqSection" className="hover:underline">FAQ</Link></li>
          </ul>
        </div>

        {/* Column 2 - Legal + More */}
        <div className="pt-12 md:pt-0">
          <h3 className="text-lg font-bold text-[#00C48C] mb-4">Legal</h3>
          <ul className="space-y-2 font-semibold">
            <li><a href="/blogs" className="hover:underline">Blogs</a></li>
            <li><a href="/career" className="hover:underline">Career</a></li>
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
            <li><a href="/refund" className="hover:underline">Cancellation & Refund</a></li>
          </ul>
        </div>

        {/* Column 3 - Mission + Icons */}
        <div>
          <h3 className="text-lg font-bold text-[#00C48C] mb-4">Our Mission</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Our mission is to create an innovative financial platform that delivers seamless, secure, and smart transactions to everyone, everywhere.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#00C48C]">
              <i className="fab fa-linkedin-in text-lg"></i>
            </a>
            <a href="#" className="hover:text-[#00C48C]">
              <i className="fas fa-envelope text-lg"></i>
            </a>
            <a href="#" className="hover:text-[#00C48C]">
              <i className="fas fa-phone text-lg"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Partner Logos */}
      <div className="flex flex-wrap justify-center gap-25 items-center border-t border-gray-600 pt-6 mt-10 opacity-80">
        {logos.map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            className="h-6 grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
