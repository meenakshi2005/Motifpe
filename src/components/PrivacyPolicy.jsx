import React from "react";
import Footer from "./footer";
import Ready from "./Ready";

const PrivacyPolicy = () => {
  return (
    <>
    <div className="bg-[#f9fafa] min-h-screen px-6 py-12 md:px-[10%] text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#00C48C] mb-6">
          Privacy Policy
        </h1>

        {/* Last Updated */}
        <p className="text-sm text-gray-500 mb-8">Last updated: July 18, 2025</p>

        {/* Sections */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>
            Welcome to MotifPe. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>Personal Data (name, email, contact info)</li>
            <li>Usage Data (pages visited, interactions)</li>
            <li>Device and Location Information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">3. How We Use Your Data</h2>
          <p>
            We use the information to operate, maintain, and improve our services. This includes customer support, analytics, and personalization of your experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">4. Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share your data with trusted third-party service providers under strict confidentiality obligations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">5. Your Choices</h2>
          <p>
            You may access, update, or delete your data at any time by contacting us. You can also opt out of marketing communications.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">6. Security</h2>
          <p>
            We implement strong security measures to protect your information. However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at <span className="text-[#00C48C] font-medium">support@motifpe.com</span>.
          </p>
        </section>
      </div>
      
    </div>
    <Ready />
<Footer />
    </>
  );
};

export default PrivacyPolicy;
