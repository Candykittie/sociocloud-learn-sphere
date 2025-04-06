
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Courses from '@/components/sections/Courses';
import Companies from '@/components/sections/Companies';
import TopPerformers from '@/components/sections/TopPerformers';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Courses />
        <Companies />
        <TopPerformers />
        <section id="contact" className="section bg-white border-t border-gray-200">
          <div className="container-wrapper">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-socio-dark mb-4">Get in Touch</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Have questions about our programs or need more information? Reach out to our team.
              </p>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-socio-blue"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-socio-blue"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Your message"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-socio-blue"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
