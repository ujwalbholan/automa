import Link from "next/link";
import React from "react";
import { WavyBackground } from "../ui/wavy-background";

const Footer = () => {
  return (
    <div>
      <section className=" flex items-center justify-center relative min-h-[300px]">
        <WavyBackground className="absolute inset-0 z-0" />
        <footer className="py-12 bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Automa
                </h3>
                <p className="text-neutral-300">
                  Automate your tasks with ease. Connect apps, streamline
                  workflows, and boost productivity.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Quick Links
                </h3>
                <ul className="text-neutral-300">
                  <li className="mb-2">
                    <Link
                      href="/about"
                      className="hover:text-purple-400 transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="/pricing"
                      className="hover:text-purple-400 transition-colors"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="/contact"
                      className="hover:text-purple-400 transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sign-in"
                      className="hover:text-purple-400 transition-colors"
                    >
                      Sign In
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Connect With Us
                </h3>
                <div className="flex justify-center md:justify-start space-x-4">
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
            </div>
            <div className="mt-12 text-center text-neutral-300">
              <p>
                &copy; {new Date().getFullYear()} Automa. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
