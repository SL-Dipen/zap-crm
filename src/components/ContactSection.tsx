import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
      setIsLoading(false);
    }, 900);
  };

  return (
    <section id="contact" className="relative section-padding bg-gradient-to-b from-white to-savannah-50 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-savannah-200/30 rounded-full blur-2xl pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-savannah-50 border border-savannah-200 mb-4">
              <MessageSquare size={12} className="text-savannah-600" />
              <h6 className="text-savannah-700 font-semibold text-xs tracking-widest uppercase">
                Get in touch
              </h6>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-savannah-800 mb-5 tracking-tight">
              Ready to transform your{" "}
              <span className="bg-gradient-to-r from-savannah-600 to-savannah-500 bg-clip-text text-transparent">
                customer relationships
              </span>
              ?
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Have questions or need more information? Fill out the form and
              our team will get back to you within 24 hours.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: Mail,
                  label: "Email us",
                  value: "info@zapcrmdummy.com",
                  href: "mailto:info@zapcrmdummy.com",
                },
                {
                  icon: Phone,
                  label: "Call us",
                  value: "+1 (555) 123-4567",
                  href: "tel:+15551234567",
                },
                {
                  icon: MapPin,
                  label: "Visit us",
                  value: "123 Innovation Drive, San Francisco, CA",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                const Tag: any = item.href ? "a" : "div";
                return (
                  <Tag
                    key={i}
                    href={item.href}
                    className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-savannah-300 hover:shadow-md transition-[border-color,box-shadow] duration-300 ease-out"
                  >
                    <div className="bg-gradient-to-br from-savannah-100 to-savannah-200 p-3 rounded-xl group-hover:scale-105 transform-gpu transition-transform duration-300 ease-out">
                      <Icon className="text-savannah-600" size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        {item.label}
                      </h4>
                      <p className="text-savannah-800 font-medium">
                        {item.value}
                      </p>
                    </div>
                  </Tag>
                );
              })}
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-savannah-300/25 to-savannah-500/25 rounded-3xl blur-2xl pointer-events-none" />
            <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
              <h3 className="text-2xl font-bold text-savannah-800 mb-2">
                Request a demo
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                See ZapCRM in action with a personalized walkthrough.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      required
                      className="rounded-lg border-gray-200 focus:border-savannah-500 focus:ring-savannah-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      required
                      className="rounded-lg border-gray-200 focus:border-savannah-500 focus:ring-savannah-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide"
                  >
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="rounded-lg border-gray-200 focus:border-savannah-500 focus:ring-savannah-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your needs..."
                    required
                    rows={4}
                    className="rounded-lg border-gray-200 focus:border-savannah-500 focus:ring-savannah-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-savannah-600 to-savannah-700 hover:from-savannah-700 hover:to-savannah-800 text-white font-semibold py-6 rounded-xl shadow-lg shadow-savannah-600/30 transition-all group"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <Send
                        size={16}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </span>
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to our Privacy Policy and Terms.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
