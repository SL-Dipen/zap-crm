
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h6 className="text-savannah-600 font-semibold subheading mb-2 tracking-wider">GET IN TOUCH</h6>
            <h2 className="text-3xl md:text-4xl font-bold text-savannah-800 mb-4">Ready to Transform Your Customer Relationships?</h2>
            <p className="text-gray-600 mb-8">
              Have questions or need more information? Fill out the form and our team will get back to you as soon as possible.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="bg-savannah-100 p-3 rounded-full mr-4">
                  <Mail className="text-savannah-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-savannah-800">Email Us</h4>
                  <p className="text-gray-600">info@savannahcrm.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-savannah-100 p-3 rounded-full mr-4">
                  <Phone className="text-savannah-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-savannah-800">Call Us</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h3 className="text-2xl font-playfair font-bold text-savannah-700 mb-6 text-center">Request Demo</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full rounded-md"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full rounded-md"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full rounded-md"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  className="w-full rounded-md"
                  rows={4}
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full btn-primary ui-element"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Request Your Demo"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
