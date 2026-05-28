
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Users, Activity, Layers, BarChart } from 'lucide-react';

const About = () => {
  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 bg-gradient-to-b from-savannah-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-savannah-800 mb-6">About Savannah Labs</h1>
            <p className="text-xl text-gray-600 mb-8 font-inter">
              Empowering businesses with innovative solutions for better customer relationships.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-savannah-700 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 font-inter">
                Founded in 2018, Savannah Labs began with a simple mission: to create CRM software that people actually enjoy using. 
                Our founders, experienced in both technology and customer success, recognized the frustration that teams faced with 
                complex and unintuitive CRM systems.
              </p>
              <p className="text-gray-600 mb-4 font-inter">
                What started as a solution for small businesses has evolved into a comprehensive platform that serves companies of 
                all sizes across industries, while maintaining our core values of simplicity, efficiency, and exceptional user experience.
              </p>
              <p className="text-gray-600 font-inter">
                Today, Savannah Labs continues to innovate in the CRM space, developing features that anticipate the evolving needs of 
                businesses in an increasingly digital marketplace.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.02] transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Savannah Labs Team" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our CRM Product */}
      <section className="py-16 bg-savannah-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-savannah-800 mb-6">Savannah CRM</h2>
            <p className="text-xl text-gray-600 font-inter">
              Our flagship product is designed to transform how businesses manage customer relationships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-savannah-100 rounded-full flex items-center justify-center mb-4">
                <Users className="text-savannah-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-savannah-700 mb-3">Contact Management</h3>
              <p className="text-gray-600 font-inter">
                Organize all your customer information in one place with powerful segmentation and tagging capabilities.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-savannah-100 rounded-full flex items-center justify-center mb-4">
                <Activity className="text-savannah-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-savannah-700 mb-3">Sales Pipeline</h3>
              <p className="text-gray-600 font-inter">
                Visualize and manage your sales process from lead to close with customizable stages and automation.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-savannah-100 rounded-full flex items-center justify-center mb-4">
                <Layers className="text-savannah-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-savannah-700 mb-3">Task Management</h3>
              <p className="text-gray-600 font-inter">
                Never miss a follow-up with integrated task management and automated reminders for your team.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-savannah-100 rounded-full flex items-center justify-center mb-4">
                <BarChart className="text-savannah-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-savannah-700 mb-3">Analytics</h3>
              <p className="text-gray-600 font-inter">
                Make data-driven decisions with comprehensive reporting and dashboards that provide actionable insights.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="/products" className="inline-flex items-center gap-2 font-medium text-savannah-600 hover:text-savannah-700 transition-colors">
              Explore our product in detail <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
      
      {/* Team Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-savannah-800 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 font-inter">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-savannah-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-savannah-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-savannah-700 mb-3">Customer Success</h3>
              <p className="text-gray-600 font-inter">
                We succeed when our customers succeed. Everything we build is designed to help businesses grow.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-savannah-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-savannah-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-savannah-700 mb-3">Innovation</h3>
              <p className="text-gray-600 font-inter">
                We continuously push boundaries to create solutions that anticipate the future needs of our clients.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-savannah-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-savannah-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-savannah-700 mb-3">Simplicity</h3>
              <p className="text-gray-600 font-inter">
                We believe powerful software doesn't have to be complicated. Intuitive design is at our core.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
