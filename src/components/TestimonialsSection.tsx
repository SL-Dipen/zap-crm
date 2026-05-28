
import { useState, useEffect } from "react";

const testimonials = [
  {
    content: "Savannah CRM has revolutionized how we manage our client relationships. The intuitive interface and powerful analytics have helped us increase our sales by 35% in just three months.",
    author: "Sarah Johnson",
    position: "Sales Manager",
    company: "TechGrowth Inc.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    content: "I've used many CRM systems throughout my career, but none compare to the ease of use and comprehensive features of Savannah. It's been a game-changer for our organization.",
    author: "Michael Chen",
    position: "CEO",
    company: "Innovative Solutions",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    content: "The customer support team at Savannah CRM is outstanding. They've been with us every step of the way, ensuring we're leveraging the platform to its fullest potential.",
    author: "Elena Rodriguez",
    position: "Customer Success Director",
    company: "Global Services Ltd",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 250); // Half of transition duration (500ms / 2)
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    if (index !== activeIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex(index);
        setIsTransitioning(false);
      }, 250);
    }
  };

  return (
    <section id="testimonials" className="section-padding bg-savannah-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h6 className="text-savannah-600 font-semibold subheading mb-2 tracking-wider">TESTIMONIALS</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-savannah-800 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it. See how Savannah CRM has transformed businesses worldwide.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <div className="absolute -top-5 left-10 text-7xl text-savannah-300 font-serif">"</div>
            <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'}`}>
              <div className="mb-6">
                <p className="text-lg md:text-xl text-gray-700 italic relative z-10">
                  {testimonials[activeIndex].content}
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-savannah-800">{testimonials[activeIndex].author}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  activeIndex === index ? "bg-savannah-600" : "bg-gray-300"
                } transition-all duration-500 hover:scale-110`}
                onClick={() => handleDotClick(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
