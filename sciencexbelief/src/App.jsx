
import React from "react";

export default function App() {
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold md:text-5xl mb-4">
          Can Time and Energy Prove the Existence of God?
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          We're exploring how scientific discoveries connect with spiritual beliefs.
          Share your voice in our 1-minute survey.
        </p>
        <a
          href="#survey"
          className="mt-6 inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-xl shadow hover:bg-gray-100"
        >
          Take the Survey
        </a>
      </header>

      <section id="survey" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">
            📋 Your Opinion Matters
          </h2>
          <div className="w-full h-[900px] shadow-lg rounded-xl overflow-hidden">
            <iframe
              src="https://forms.gle/evT1sLYvwxoHwGCUA"
              className="w-full h-full border-0"
              title="Research Survey"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-gray-500">
        Built by young researchers exploring science and belief — 2025
      </footer>
    </div>
  );
}
