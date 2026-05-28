
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-savannah-800 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-montserrat font-bold">
              Savannah<span className="text-savannah-400">CRM</span>
            </h3>
            <p className="text-savannah-100">
              Empowering businesses to build stronger customer relationships.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-savannah-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-savannah-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-savannah-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-savannah-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-savannah-100">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-savannah-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-savannah-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-savannah-300 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-savannah-300 hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#" className="text-savannah-300 hover:text-white transition-colors">Updates</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-savannah-100">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-savannah-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-savannah-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-savannah-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-savannah-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-savannah-100">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-savannah-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-savannah-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-savannah-300 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-savannah-300 hover:text-white transition-colors">Data Processing</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-savannah-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-savannah-300 text-sm">
            © {new Date().getFullYear()} Savannah CRM. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <select 
              className="bg-savannah-700 text-savannah-300 rounded px-2 py-1 text-sm"
              defaultValue="en"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
