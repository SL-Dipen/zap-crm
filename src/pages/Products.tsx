
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Image, Package, Layers } from 'lucide-react';

const ProductCard = ({ image, title, description, delay = 0 }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
    >
      <div className="overflow-hidden">
        <motion.img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-savannah-700 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 font-inter">{description}</p>
        <motion.button
          className="text-savannah-600 font-medium inline-flex items-center"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Learn more <ArrowRight size={16} className="ml-1" />
        </motion.button>
      </div>
    </motion.div>
  );
};

const FeatureHighlight = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      className="flex gap-4 p-6 rounded-lg bg-white shadow-md"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-savannah-100 rounded-full flex items-center justify-center">
          <Icon className="text-savannah-600" size={24} />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-savannah-700 mb-2">{title}</h3>
        <p className="text-gray-600 font-inter">{description}</p>
      </div>
    </motion.div>
  );
};

const Products = () => {
  const [activeImage, setActiveImage] = useState(null);

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    // Add framer-motion to the project
  }, []);

  const dashboardImages = [
    {
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      alt: "Dashboard Overview",
      title: "Complete Dashboard"
    },
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      alt: "Sales Analytics",
      title: "Sales Analytics"
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      alt: "Customer Management",
      title: "Customer Management"
    },
    {
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      alt: "Reports Interface",
      title: "Reports Interface"
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      alt: "Mobile Experience",
      title: "Mobile Experience"
    }
  ];

  const openLightbox = (image) => {
    setActiveImage(image);
  };

  const closeLightbox = () => {
    setActiveImage(null);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <motion.div 
        className="pt-24 bg-gradient-to-b from-savannah-50 to-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-savannah-800 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Savannah CRM Products
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8 font-inter"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore our suite of powerful tools designed to transform your customer relationships
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button className="btn-primary" size="lg">
                Start Free Trial
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Product Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="dashboard" className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="grid grid-cols-3 max-w-md">
                <TabsTrigger value="dashboard" className="text-base font-medium">Dashboard</TabsTrigger>
                <TabsTrigger value="mobile" className="text-base font-medium">Mobile App</TabsTrigger>
                <TabsTrigger value="integrations" className="text-base font-medium">Integrations</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="dashboard" className="mt-6">
              <motion.div layout>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {dashboardImages.map((image, index) => (
                    <motion.div 
                      key={index}
                      className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
                      whileHover={{ scale: 1.03 }}
                      onClick={() => openLightbox(image)}
                      layout
                    >
                      <div className="relative overflow-hidden group">
                        <motion.img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-64 object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 text-white">
                            <h3 className="font-semibold text-lg">{image.title}</h3>
                            <p className="text-sm text-white/80">Click to view</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="mobile">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h2 className="text-3xl font-bold text-savannah-700 mb-6">
                    Savannah CRM Mobile
                  </h2>
                  <p className="text-gray-600 mb-6 font-inter">
                    Take your CRM on the go with our powerful mobile application. Access customer 
                    information, update deals, and manage tasks from anywhere, anytime.
                  </p>
                  
                  <div className="space-y-4">
                    <FeatureHighlight 
                      icon={Package}
                      title="Offline Access"
                      description="Work without internet connection and sync when you're back online."
                      index={0}
                    />
                    <FeatureHighlight 
                      icon={Image}
                      title="Business Card Scanner"
                      description="Add new contacts instantly by scanning business cards."
                      index={1}
                    />
                    <FeatureHighlight 
                      icon={Layers}
                      title="Mobile-Optimized Dashboard"
                      description="Get key insights at a glance with our mobile-optimized views."
                      index={2}
                    />
                  </div>
                </div>
                
                <div className="order-1 md:order-2 flex justify-center">
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                  >
                    <div className="border-8 border-black rounded-[36px] overflow-hidden shadow-xl w-64 h-[500px] mx-auto">
                      <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                        alt="Savannah CRM Mobile App"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <motion.div 
                      className="absolute -z-10 top-6 left-6 w-full h-full rounded-[36px] bg-savannah-300"
                      animate={{ x: [0, 5, 0], y: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    />
                  </motion.div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="integrations">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-savannah-800 mb-6">
                  Seamless Integrations
                </h2>
                <p className="text-xl text-gray-600 mb-8 font-inter">
                  Connect Savannah CRM with your favorite tools and platforms
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {['Gmail', 'Slack', 'Microsoft Office', 'Zapier', 'Mailchimp', 'Zoom'].map((integration, index) => (
                  <motion.div
                    key={integration}
                    className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-savannah-300 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="w-16 h-16 bg-savannah-50 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-xl font-bold text-savannah-600">{integration.charAt(0)}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-savannah-700">{integration}</h3>
                    <p className="text-gray-500 text-sm mb-4 font-inter">Connect your {integration} account</p>
                    <Button variant="outline" className="w-full hover:bg-savannah-50 transition-colors">
                      Connect
                    </Button>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Product Cards */}
      <section className="py-16 bg-savannah-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-savannah-800 mb-6">Our Product Suite</h2>
            <p className="text-xl text-gray-600 font-inter">
              Discover the tools that will transform your customer relationships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard 
              image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              title="Savannah Core CRM"
              description="The foundation of customer relationship management with contact management, sales pipelines, and task tracking."
              delay={0.1}
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
              title="Savannah Analytics"
              description="Advanced reporting and data visualization to help you make better business decisions."
              delay={0.2}
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1518770660439-4636190af475"
              title="Savannah Connect"
              description="Communication tools to engage with your customers through email, chat, and more."
              delay={0.3}
            />
          </div>
        </div>
      </section>
      
      {/* Lightbox for image preview */}
      {activeImage && (
        <motion.div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
        >
          <motion.div 
            className="relative max-w-4xl max-h-[80vh]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={activeImage.src} 
              alt={activeImage.alt}
              className="max-h-[80vh] mx-auto object-contain rounded-lg"
            />
            <button 
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors"
              onClick={closeLightbox}
            >
              ✕
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 rounded-b-lg">
              <h3 className="text-xl font-bold">{activeImage.title}</h3>
              <p className="text-sm text-white/80">{activeImage.alt}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
      
      <Footer />
    </div>
  );
};

export default Products;
