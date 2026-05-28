import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    content:
      "ZapCRM has revolutionized how we manage client relationships. The intuitive interface and powerful analytics helped us increase sales by 35% in just three months.",
    author: "Sarah Johnson",
    position: "Sales Manager",
    company: "TechGrowth Inc.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    content:
      "I've used many CRM systems throughout my career, but none compare to the ease of use and comprehensive features of ZapCRM. It's been a game-changer for our organization.",
    author: "Michael Chen",
    position: "CEO",
    company: "Innovative Solutions",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    content:
      "The customer support team at ZapCRM is outstanding. They've been with us every step of the way, ensuring we're leveraging the platform to its fullest potential.",
    author: "Elena Rodriguez",
    position: "Customer Success Director",
    company: "Global Services Ltd",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setActiveIndex((i) => (i + 1) % testimonials.length),
    []
  );
  const prev = () =>
    setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  const t = testimonials[activeIndex];

  return (
    <section
      id="testimonials"
      className="relative section-padding bg-gradient-to-b from-savannah-50 to-white overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-savannah-200/30 rounded-full blur-2xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-savannah-300/20 rounded-full blur-2xl -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-savannah-200 mb-4 shadow-sm">
            <Star size={12} className="text-savannah-500 fill-savannah-500" />
            <h6 className="text-savannah-700 font-semibold text-xs tracking-widest uppercase">
              Testimonials
            </h6>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-savannah-800 mb-4 tracking-tight">
            Loved by teams worldwide
          </h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it — see how ZapCRM has transformed
            businesses across industries.
          </p>
        </motion.div>

        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative bg-white rounded-3xl shadow-2xl shadow-savannah-200/40 p-8 md:p-12 border border-gray-100">
            <Quote
              className="absolute -top-6 left-8 text-savannah-500 fill-savannah-500"
              size={48}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-savannah-500 fill-savannah-500"
                    />
                  ))}
                </div>

                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8 font-medium">
                  "{t.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={t.avatar}
                      alt={t.author}
                      className="w-14 h-14 rounded-full object-cover ring-4 ring-savannah-100"
                    />
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-savannah-800">{t.author}</h4>
                    <p className="text-sm text-gray-600">
                      {t.position} ·{" "}
                      <span className="text-savannah-600 font-medium">
                        {t.company}
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Arrow nav */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-3 sm:-left-6">
              <button
                onClick={prev}
                aria-label="Previous"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center text-savannah-700 hover:bg-savannah-600 hover:text-white hover:border-savannah-600 transition-all duration-300 ease-out"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-3 sm:-right-6">
              <button
                onClick={next}
                aria-label="Next"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center text-savannah-700 hover:bg-savannah-600 hover:text-white hover:border-savannah-600 transition-all duration-300 ease-out"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                aria-label={`View testimonial ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-savannah-600 w-8"
                    : "bg-gray-300 hover:bg-savannah-300 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
