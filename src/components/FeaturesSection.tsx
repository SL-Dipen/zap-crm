
import { Users, TrendingUp, ChartBar, Calendar, Database, FileText, Shield, Link } from "lucide-react";

const features = [
  {
    icon: <Users size={32} className="text-savannah-600" />,
    title: "Contact Management",
    description: "Centralize customer data for easy access and organization. Track all customer interactions in one place."
  },
  {
    icon: <TrendingUp size={32} className="text-savannah-600" />,
    title: "Sales Pipeline Tracking",
    description: "Visualize your entire sales process. Move deals through customizable stages with drag-and-drop ease."
  },
  {
    icon: <ChartBar size={32} className="text-savannah-600" />,
    title: "Analytics Dashboard",
    description: "Get actionable insights with real-time reporting. Visualize key metrics to drive strategic decisions."
  },
  {
    icon: <Calendar size={32} className="text-savannah-600" />,
    title: "Scheduling",
    description: "Coordinate meetings efficiently. Sync with your favorite calendar apps to avoid scheduling conflicts."
  },
  {
    icon: <Database size={32} className="text-savannah-600" />,
    title: "Data Storage",
    description: "Secure, unlimited storage for all your customer data with enterprise-grade encryption."
  },
  {
    icon: <FileText size={32} className="text-savannah-600" />,
    title: "Document Management",
    description: "Store, share, and collaborate on documents directly within your CRM workflow."
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h6 className="text-savannah-600 font-semibold subheading mb-2 tracking-wider">FEATURES</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-savannah-800 mb-4">Everything You Need to Manage Relationships</h2>
          <p className="text-gray-600 text-lg">
            Savannah CRM offers a comprehensive suite of tools designed to streamline your workflows and boost productivity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-savannah-50 p-3 rounded-lg w-fit mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-savannah-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
