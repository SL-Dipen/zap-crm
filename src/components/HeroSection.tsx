
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    // Smooth scroll to pricing section
    const pricingElement = document.getElementById('pricing');
    if (pricingElement) {
      pricingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestDemo = () => {
    // Smooth scroll to contact section
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-savannah-50 to-savannah-100 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 pt-20 pb-12 md:pt-32 md:pb-24 max-w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-6 md:space-y-8 animate-fade-in-right">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-savannah-800 leading-tight">
              Simplify Customer Relationships.<br />
              <span className="text-savannah-600">Amplify Growth.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-lg font-inter">
              ZapCRM helps businesses streamline customer management, boost sales performance, and make data-driven decisions with powerful analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="bg-savannah-600 text-white flex items-center justify-center gap-2 animate-slide-up w-full sm:w-auto" 
                size="lg" 
                onClick={handleGetStarted}
                style={{ animationDelay: '0.2s' }}
              >
                Get Started
                <ArrowRight size={18} />
              </Button>
              <Button 
                className="bg-white text-savannah-600 border border-savannah-600 animate-slide-up w-full sm:w-auto" 
                size="lg" 
                onClick={handleRequestDemo}
                style={{ animationDelay: '0.3s' }}
              >
                Request a Demo
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4 font-poppins">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-savannah-300 border-2 border-white flex items-center justify-center text-xs text-white">
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-savannah-700">1,000+ businesses</span> trust ZapCRM
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 animate-fade-in-left">
            <div className="relative rounded-lg shadow-2xl overflow-hidden max-w-full">
              <div className="bg-white p-2 sm:p-4 rounded-lg shadow-xl border border-gray-100 transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="/lovable-uploads/3fb8e3e4-8780-48d9-91a9-6bf8b1fc00dd.png" 
                  alt="ZapCRM Dashboard"
                  className="rounded-md w-full h-auto max-w-full"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-savannah-600 text-white p-2 sm:p-3 rounded-full w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center font-bold transform rotate-12 text-xs sm:text-sm">
                NEW
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
