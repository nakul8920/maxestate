import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4">
      <section className="max-w-xl w-full text-center">
        <div className="mb-6 flex justify-center">
          <img src="/logo.png" alt="Max Estates" className="h-12 w-auto" />
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
          <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-green-100 flex items-center justify-center">
            <svg className="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>

          <h1 className="text-2xl font-bold text-navy-deep mb-2">Thank you!</h1>
          <p className="text-gray-600 mb-6">
            We’ve received your details. Our team will connect with you shortly
            with more information about Max Estate 128.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-navy-deep text-white hover:bg-navy-light transition-colors"
            >
              Back to Home
            </Link>
            <a
              href="https://wa.me/917303665082?text=Hi, I just submitted my details for Max Estate 128."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ThankYou;


