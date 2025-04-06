
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Courses', path: '/#courses' },
    { name: 'Webinar', path: '/#webinar' },
    { name: 'Leadership Scorecard', path: '/#leadership' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="container-wrapper mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="bg-socio-blue text-white font-bold text-xl w-10 h-10 flex items-center justify-center rounded-md">
              SC
            </span>
            <span className="text-socio-dark font-bold text-2xl">Sociocloud</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <a 
                key={item.name} 
                href={item.path} 
                className="text-gray-600 hover:text-socio-blue transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
            <Link 
              to="/login"
              className="btn-primary ml-4"
            >
              Login
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu} 
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 animate-fade-in">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="block py-2 px-4 text-gray-600 hover:bg-gray-100 hover:text-socio-blue"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Link
              to="/login"
              className="block py-2 px-4 text-socio-blue font-medium hover:bg-socio-light mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
