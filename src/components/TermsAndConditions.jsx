import React from "react";
import Footer from "./footer";
import Ready from "./Ready";

const TermsAndConditions = () => {
  return (
    <>
    <div className="bg-[#f9fafa] min-h-screen px-6 py-12 md:px-[10%] text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#00C48C] mb-6">
          Terms & Conditions
        </h1>

        {/* Last Updated */}
        <p className="text-sm text-gray-500 mb-8">Last updated: July 18, 2025</p>

        {/* Sections */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing and using MotifPe, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">2. Use of Services</h2>
          <p>
            You agree to use MotifPe only for lawful purposes. You are responsible for all activity that occurs under your account and agree not to misuse or disrupt the platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">3. User Accounts</h2>
          <p>
            To access certain features, you may be required to register and maintain an account. You must provide accurate information and keep your credentials confidential.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
          <p>
            All content, trademarks, and intellectual property on MotifPe are owned by or licensed to us. You may not use any part of our platform without written permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">5. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access at any time for violating these Terms or engaging in harmful behavior toward the platform or users.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">6. Limitation of Liability</h2>
          <p>
            MotifPe is provided “as is” and we make no warranties. We are not liable for any direct or indirect damages resulting from your use of the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">7. Changes to Terms</h2>
          <p>
            We may update these Terms & Conditions from time to time. Continued use after changes implies your acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <span className="text-[#00C48C] font-medium">legal@motifpe.com</span>.
          </p>
        </section>
      </div>
    </div>
    <Ready />
    <Footer />
    </>
  );
};

export default TermsAndConditions;
