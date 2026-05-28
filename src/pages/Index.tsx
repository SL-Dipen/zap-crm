
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProductsSection from '@/components/ProductsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update document meta tags programmatically
    document.title = "ZapCRM | Simplify Customer Relationships";

    // Update meta tags
    const metaTags = {
      description: "ZapCRM helps businesses streamline customer management, boost sales performance, and make data-driven decisions with powerful analytics.",
      keywords: "CRM, customer relationship management, sales automation, business software, ZapCRM",
      "og:title": "ZapCRM | Simplify Customer Relationships",
      "og:description": "Transform your customer relationships with ZapCRM's powerful tools.",
      "og:type": "website",
      "twitter:card": "summary_large_image",
      "twitter:title": "ZapCRM | Simplify Customer Relationships",
      "twitter:description": "Transform your customer relationships with ZapCRM's powerful tools."
    };
    
    // Set meta tags
    Object.entries(metaTags).forEach(([name, content]) => {
      // Check if meta tag already exists
      let metaTag = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      
      if (!metaTag) {
        // Create new meta tag if it doesn't exist
        metaTag = document.createElement('meta');
        if (name.startsWith('og:')) {
          metaTag.setAttribute('property', name);
        } else {
          metaTag.setAttribute('name', name);
        }
        document.head.appendChild(metaTag);
      }
      
      // Set or update content
      metaTag.setAttribute('content', content);
    });
    
    // Set canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://zapcrm.com');
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
