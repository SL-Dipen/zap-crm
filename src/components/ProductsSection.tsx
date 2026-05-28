
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, ChartBar } from "lucide-react";

const ProductKeyPoint = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      className="flex gap-4 p-6 rounded-lg bg-white shadow-md transform-gpu transition-transform duration-300 ease-out hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
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

const ProductsSection = () => {
  const [activeImage, setActiveImage] = useState(null);

  // Using the uploaded CRM interface screenshots
  const dashboardImages = [
    {
      src: "/assets/c35d45f9-aea9-49b9-ad95-8815793dde81.png",
      alt: "Company Information Form",
      title: "Lead Creation"
    },
    {
      src: "/assets/c46a6604-b144-4bab-8085-50435980a868.png",
      alt: "Contact Information Form",
      title: "Contact Management"
    },
    {
      src: "/assets/c1e3cef5-6f56-4bdf-8b47-4fc04013ae63.png",
      alt: "Lead Details Form",
      title: "Lead Details"
    },
    {
      src: "/assets/0779f228-54be-4dc5-948d-474dd40078a8.png",
      alt: "Lead View with Activity",
      title: "Lead Activity Tracking"
    }
  ];

  const productKeyPoints = [
    {
      icon: Shield,
      title: "Secure Data Storage",
      description: "Enterprise-grade security with end-to-end encryption for all your customer data."
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Actionable insights to improve your sales performance and team productivity."
    },
    {
      icon: ChartBar,
      title: "Customizable Dashboards",
      description: "Create and customize dashboards to track the metrics that matter to your business."
    }
  ];

  const openLightbox = (image) => {
    setActiveImage(image);
  };

  const closeLightbox = () => {
    setActiveImage(null);
  };

  const handleFreeTrialClick = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="relative py-20 bg-gradient-to-b from-white to-savannah-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-savannah-200/30 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-savannah-50 border border-savannah-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-savannah-500" />
            <h6 className="text-savannah-700 font-semibold text-xs tracking-widest uppercase">Our Products</h6>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-savannah-800 mb-5 tracking-tight">
            Discover Our <span className="bg-gradient-to-r from-savannah-600 to-savannah-500 bg-clip-text text-transparent">CRM Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Explore the powerful tools that will transform your customer relationships.
          </p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              className="bg-savannah-600 text-white px-6 py-3 rounded-md font-medium hover:bg-savannah-700 transition-colors duration-300 font-rubik" 
              size="lg" 
              onClick={handleFreeTrialClick}
            >
              Start Free Trial
            </Button>
          </motion.div>
        </div>
        
        {/* Dashboard Images - 2x2 grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4 md:gap-6">
          {dashboardImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(image)}
              className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-[transform,box-shadow] duration-300 ease-out transform-gpu hover:-translate-y-1 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover object-top transform-gpu transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                    <p className="text-sm text-white/80">Click to view</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Product Key Points - Improved responsiveness */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {productKeyPoints.map((point, index) => (
            <ProductKeyPoint 
              key={index}
              icon={point.icon}
              title={point.title}
              description={point.description}
              index={index}
            />
          ))}
        </div>
      </div>
      
      {/* Lightbox for image preview - Improved mobile responsiveness */}
      {activeImage && (
        <motion.div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
        >
          <motion.div 
            className="relative max-w-4xl w-full max-h-[80vh]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={activeImage.src} 
              alt={activeImage.alt}
              className="max-h-[80vh] w-full mx-auto object-contain rounded-lg"
            />
            <button 
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors"
              onClick={closeLightbox}
            >
              ✕
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 sm:p-4 rounded-b-lg">
              <h3 className="text-lg sm:text-xl font-bold">{activeImage.title}</h3>
              <p className="text-xs sm:text-sm text-white/80">{activeImage.alt}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ProductsSection;
