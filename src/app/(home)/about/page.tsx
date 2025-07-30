import React from "react";

const About = () => {
  return (
    <div>
      <section className="py-24 mt-[135px] relative min-h-[400px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 animate-fade-in-up">
            Our Mission
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto mb-12 text-lg md:text-xl">
            At Automa, we empower businesses and individuals to streamline their
            workflows by connecting apps and automating repetitive tasks. Our
            mission is to make automation accessible, intuitive, and powerful,
            so you can focus on what matters most.
          </p>
        </div>
      </section>

      <section className="py-24 relative min-h-[400px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 animate-fade-in-up">
            Meet the Team
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto mb-12 text-lg">
            Our team is passionate about building tools that simplify your life.
            We combine expertise in automation, design, and technology to
            deliver a seamless experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-neutral-800 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up delay-100">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Ujwal Bholan
              </h3>
              <p className="text-neutral-300 mb-2">Co-Founder & CEO</p>
              <p className="text-neutral-400">
                Jane leads Automa’s vision, bringing years of experience in
                automation and business strategy.
              </p>
            </div>
            <div className="p-8 bg-neutral-800 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up delay-200">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Harka Man Thapa
              </h3>
              <p className="text-neutral-300 mb-2">Lead Developer</p>
              <p className="text-neutral-400">
                John drives the technical innovation behind Automa’s platform,
                ensuring robust integrations.
              </p>
            </div>
            <div className="p-8 bg-neutral-800 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up delay-300">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Sita Kumari Poudel
              </h3>
              <p className="text-neutral-300 mb-2">Head of Design</p>
              <p className="text-neutral-400">
                Emily crafts intuitive and beautiful interfaces to make
                automation effortless for users.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
