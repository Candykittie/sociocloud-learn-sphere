
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat pt-16"
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')"
      }}
    >
      <div className="container-wrapper text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          Transform Your Learning Experience
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
          Elevate your skills with our expert-led courses, workshops and resources designed to prepare you for tomorrow's challenges.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Link to="/#courses" className="btn-primary text-lg px-8 py-3">
            Explore Courses
          </Link>
          <Link to="/login" className="bg-white text-socio-dark hover:bg-gray-200 font-semibold text-lg py-3 px-8 rounded-md transition-all">
            Get Started
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-white">
          <span className="mb-2">Learn More</span>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
