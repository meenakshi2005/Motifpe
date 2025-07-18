export default function SubscribeSection() {
  return (
    <section className="text-center px-4 py-16 bg-[#00C48C]">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
        Stay Connected with us?
      </h2>
      <p className="max-w-2xl mx-auto text-white text-base md:text-lg mb-8">
        Stay informed about our latest features and updates. Get tips on how to achieve faster and more secure transactions, optimize costs, and improve payment success rates. Join our community for enhanced control over payment-related data and analytics.
      </p>

      <form className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-xl mx-auto mb-3">
        <input
          type="email"
          required
          placeholder="Email Address"
          className="w-full sm:flex-1 px-4 bg-white py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
        />
        <button
          type="submit"
          className="bg-white text-[#00C48C] px-6 py-2 rounded-md hover:bg-white transition"
        >
          Subscribe
        </button>
      </form>

      <small className="text-white text-sm">
        *By subscribing, you agree to receive our marketing and promotional emails.
      </small>
    </section>
  );
}
