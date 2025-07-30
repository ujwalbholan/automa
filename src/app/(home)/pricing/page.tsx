import React from "react";

const Price = () => {
  return (
    <div>
      <section className="py-24 bg-neutral-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 animate-fade-in-up">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-neutral-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up delay-100">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Starter
              </h3>
              <p className="text-4xl font-bold text-white mb-4">$0/mo</p>
              <p className="text-neutral-300 mb-6">
                For individuals getting started.
              </p>
              <ul className="text-neutral-300 mb-6">
                <li>10 workflows</li>
                <li>100 tasks/month</li>
                <li>Basic integrations</li>
              </ul>
            </div>
            <div className="p-8 bg-neutral-800 rounded-xl shadow-lg border-2 border-purple-500 hover:shadow-2xl transition-all duration-300 animate-fade-in-up delay-200">
              <h3 className="text-2xl font-semibold text-white mb-4">Pro</h3>
              <p className="text-4xl font-bold text-white mb-4">$29.99/mo</p>
              <p className="text-neutral-300 mb-6">For growing teams.</p>
              <ul className="text-neutral-300 mb-6">
                <li>Unlimited workflows</li>
                <li>1,000 tasks/month</li>
                <li>Premium integrations</li>
              </ul>
            </div>
            <div className="p-8 bg-neutral-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up delay-300">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Enterprise
              </h3>
              <p className="text-4xl font-bold text-white mb-4">$99.99/mo</p>
              <p className="text-neutral-300 mb-6">For large organizations.</p>
              <ul className="text-neutral-300 mb-6">
                <li>Custom workflows</li>
                <li>Unlimited tasks</li>
                <li>Priority support</li>
                <li>Advanced analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Price;
