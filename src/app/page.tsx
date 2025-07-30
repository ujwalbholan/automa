import { Navbar } from "@/components/global/navbar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import Price from "./(home)/pricing/page";
import Link from "next/link";
import Footer from "@/components/global/footer";

export default function Home() {
  return (
    <main className="bg-neutral-950 text-white">
      {/* Hero Section */}
      <Navbar />
      <section
        className="h-screen w-full bg-gradient-to-br from-neutral-950 to-neutral-800 rounded-md shadow-xl 
        overflow-hidden relative flex flex-col justify-center items-center antialiased"
      >
        <BackgroundBeams className="absolute inset-0 z-0" />
        <div className="flex flex-col justify-center items-center w-full h-full mt-[-100px] md:mt-[-50px] relative z-10">
          <h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold max-w-7xl mx-auto text-center mt-20 
            py-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500
            animate-fade-in"
          >
            Automate your task with{" "}
            <div className="mt-6">
              <Cover>Automa</Cover>
            </div>
            <p className="w-full max-w-lg font-light sm:text-base md:text-lg lg:text-xl text-neutral-300 mt-6 mx-auto">
              AutoMa is an automation platform that lets users connect different
              apps and services through custom workflows.
            </p>
            <Link href="/sign-in">
              <Button
                className="bg-gradient-to-r from-indigo-600 to-purple-600 
                text-white font-semibold p-6 m-4 rounded-xl shadow-lg 
                hover:from-purple-600 hover:to-pink-500 hover:scale-105 
                transition-all duration-300 focus:outline-none focus:ring-4
                focus:ring-purple-500 focus:ring-opacity-50 cursor-pointer"
              >
                Start For Free Today
              </Button>
            </Link>
          </h1>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-neutral-900 to-neutral-800 relative">
        <BackgroundBeams className="absolute inset-0 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 animate-fade-in-up">
            Why Choose Automa?
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto mb-12 text-lg">
            Streamline your workflows with powerful features designed to save
            time and boost productivity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-neutral-800 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up delay-100">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Custom Workflows
              </h3>
              <p className="text-neutral-300">
                Connect apps like Slack, Google Drive, and more to create
                tailored automation flows.
              </p>
            </div>
            <div className="p-8 bg-neutral-800 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up delay-200">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Task Scheduling
              </h3>
              <p className="text-neutral-300">
                Schedule tasks to run automatically at specific times or
                intervals, saving you effort.
              </p>
            </div>
            <div className="p-8 bg-neutral-800 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up delay-300">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Easy Integration
              </h3>
              <p className="text-neutral-300">
                Seamlessly integrate with over 100+ apps and services with no
                coding required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-neutral-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-10 animate-fade-in-up">
            Who Can Benefit from Automa?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-neutral-800 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up delay-100">
              <h3 className="text-xl font-semibold text-white mb-4">
                Marketers
              </h3>
              <p className="text-neutral-300">
                Automate email campaigns, social media posts, and lead tracking
                to focus on strategy.
              </p>
            </div>
            <div className="p-6 bg-neutral-800 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up delay-200">
              <h3 className="text-xl font-semibold text-white mb-4">
                Customer Support Teams
              </h3>
              <p className="text-neutral-300">
                Automate ticket responses, follow-ups, and CRM updates to
                enhance customer satisfaction.
              </p>
            </div>
            <div className="p-6 bg-neutral-800 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up delay-300">
              <h3 className="text-xl font-semibold text-white mb-4">
                Small Businesses
              </h3>
              <p className="text-neutral-300">
                Save time on repetitive tasks like invoicing, customer support,
                and scheduling.
              </p>
            </div>
            <div className="p-6 bg-neutral-800 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up delay-400">
              <h3 className="text-xl font-semibold text-white mb-4">Other</h3>
              <p className="text-neutral-300">
                From freelancers to educators, automate any task to boost
                efficiency and creativity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-neutral-900 to-neutral-800 relative">
        <BackgroundBeams className="absolute inset-0 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 animate-fade-in-up">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-neutral-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up delay-100">
              <p className="text-neutral-300 italic mb-4">
                &quot;Automa saved us hours by automating our customer
                onboarding process!&quot;
              </p>
              <p className="text-white font-semibold">
                — Sarah L., Startup Founder
              </p>
            </div>
            <div className="p-8 bg-neutral-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up delay-200">
              <p className="text-neutral-300 italic mb-4">
                &quot;The task scheduling feature is a game-changer for our
                support team.&quot;
              </p>
              <p className="text-white font-semibold">
                — James K., Support Lead
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Price/>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-br from-neutral-900 to-neutral-800 relative">
        <BackgroundBeams className="absolute inset-0 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Ready to Automate Your Workflow?
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto mb-8 text-lg">
            Join thousands of users who are saving time and boosting
            productivity with Automa.
          </p>
          <Link href="/sign-in">
            <Button
              className="cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-600 
              text-white font-semibold p-6 rounded-xl shadow-lg 
              hover:from-purple-600 hover:to-pink-500 hover:scale-105 transition-all duration-300"
            >
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
