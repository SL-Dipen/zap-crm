
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    
    // Check if we need to navigate to a different page first
    if (window.location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      // The scrolling will be handled by the useEffect in the target page
    } else {
      // We're already on the homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center px-4 max-w-full">
        <div className="flex items-center">
          <a href="/" className="text-xl sm:text-2xl font-bold text-savannah-800">
            Zap <span className="text-savannah-500">CRM</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a 
            onClick={() => handleNavClick('features')} 
            className="fancy-link font-medium text-gray-700 hover:text-savannah-600 transition-colors cursor-pointer text-sm lg:text-base"
          >
            Features
          </a>
          <a 
            onClick={() => handleNavClick('products')} 
            className="fancy-link font-medium text-gray-700 hover:text-savannah-600 transition-colors cursor-pointer text-sm lg:text-base"
          >
            Products
          </a>
          <a 
            onClick={() => handleNavClick('testimonials')} 
            className="fancy-link font-medium text-gray-700 hover:text-savannah-600 transition-colors cursor-pointer text-sm lg:text-base"
          >
            Testimonials
          </a>
          <a 
            onClick={() => handleNavigation('/about')} 
            className="fancy-link font-medium text-gray-700 hover:text-savannah-600 transition-colors cursor-pointer text-sm lg:text-base"
          >
            About Us
          </a>
          <a 
            onClick={() => handleNavClick('pricing')} 
            className="fancy-link font-medium text-gray-700 hover:text-savannah-600 transition-colors cursor-pointer text-sm lg:text-base"
          >
            Pricing
          </a>
          <Button 
            className="bg-savannah-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-md font-medium hover:bg-savannah-700 transition-colors duration-300 font-rubik text-sm lg:text-base" 
            variant="default"
            onClick={() => handleNavClick('pricing')}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button 
            className="text-gray-700 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full animate-fade-in">
          <div className="flex flex-col space-y-3 p-4 max-w-full">
            <a 
              onClick={() => handleNavClick('features')} 
              className="fancy-link font-medium text-gray-700 hover:text-savannah-600 transition-colors p-2 cursor-pointer"
            >
              Features
            </a>
            <a 
              onClick={() => handleNavClick('products')} 
              className="fancy-link font-medium text-gray-700 hover:text-savannah-600 transition-colors p-2 cursor-pointer"
            >
              Products
            </a>
            <a 
              onClick={() => handleNavClick('testimonials')} 
              className="fancy-link font-medium text-gray-700 hover:text-savannah-600 transition-colors p-2 cursor-pointer"
            >
              Testimonials
            </a>
            <a 
              onClick={() => handleNavigation('/about')} 
              className="fancy-link font-medium text-gray-700 hover:text-savannah-600 transition-colors p-2 cursor-pointer"
            >
              About Us
            </a>
            <a 
              onClick={() => handleNavClick('pricing')} 
              className="fancy-link font-medium text-gray-700 hover:text-savannah-600 transition-colors p-2 cursor-pointer"
            >
              Pricing
            </a>
            <Button 
              className="bg-savannah-600 text-white px-6 py-3 rounded-md font-medium hover:bg-savannah-700 transition-colors duration-300 font-rubik mt-2 w-full" 
              variant="default"
              onClick={() => handleNavClick('pricing')}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
