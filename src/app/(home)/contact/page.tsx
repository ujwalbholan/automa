'use client'

import React from "react";
import Link from "next/link";

const ContactUs = () => {

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    console.log("Form submitted:", data);
    // Add API call or form submission logic here (e.g., send to /api/contact)

    event.target.reset();
  };

  return (
    <div>
      <section className="py-24 relative min-h-[400px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 animate-fade-in-up">
            Reach Out to Us
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto mb-12 text-lg md:text-xl">
            We’re here to help you streamline your workflows with Automa. Get in
            touch with our team for support, inquiries, or feedback.
          </p>
          <div className="flex flex-col items-center gap-6">
            <p className="text-neutral-300 text-lg">
              Email:{" "}
              <a
                href="mailto:support@automa.app"
                className="hover:text-purple-400 transition-colors"
              >
                Ujwal@gmail.com
              </a>
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com/automa_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-purple-400 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/automa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-purple-400 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2 2h14zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href="https://github.com/automa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-purple-400 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.28 1.07 2.84.82.09-.64.35-1.07.63-1.32-2.2-.25-4.51-1.1-4.51-4.9 0-1.08.39-1.96 1.03-2.65-.1-.25-.45-1.25.1-2.6 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0 1 12 6.8c.85 0 1.71.11 2.52.32 1.91-1.3 2.75-1.03 2.75-1.03.55 1.35.2 2.35.1 2.6.64.69 1.03 1.57 1.03 2.65 0 3.81-2.32 4.65-4.53 4.9.36.31.56.73.56 1.47v2.18c0 .27.16.59.67.5A10 10 0 0 0 22 12c0-5.58-4.42-10-10-10z" />
                </svg>
              </a>
            </div>
          </div>
          <Link href="/sign-in" className="mt-6 inline-block">
            <button
              className="cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-600 
              text-white font-semibold p-6 rounded-xl shadow-lg 
              hover:from-purple-600 hover:to-pink-500 hover:scale-105 transition-all duration-300"
            >
              Sign In to Connect
            </button>
          </Link>
        </div>
      </section>
      
      <section className="py-24 bg-gradient-to-brelative min-h-[400px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 text-center animate-fade-in-up">
            Send Us a Message
          </h2>
          <div className="max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="text-neutral-300 block text-sm font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  placeholder="Your name"
                  className="mt-1 w-full bg-neutral-800 text-white border border-neutral-700 focus:border-purple-500 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-neutral-300 block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Your email"
                  className="mt-1 w-full bg-neutral-800 text-white border border-neutral-700 focus:border-purple-500 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-neutral-300 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  placeholder="Your message"
                  rows={5}
                  className="mt-1 w-full bg-neutral-800 text-white border border-neutral-700 focus:border-purple-500 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 
                text-white font-semibold p-4 rounded-xl shadow-lg 
                hover:from-purple-600 hover:to-pink-500 hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
