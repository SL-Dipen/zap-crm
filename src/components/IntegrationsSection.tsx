
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

const integrationCategories = [
  { id: "all", name: "All Integrations" },
  { id: "email", name: "Email" },
  { id: "calendar", name: "Calendar" },
  { id: "analytics", name: "Analytics" },
  { id: "communication", name: "Communication" },
];

const integrations = [
  {
    name: "Google Workspace",
    logo: "https://placehold.co/100/e6e6e6/333333?text=G",
    category: "email",
  },
  {
    name: "Microsoft 365",
    logo: "https://placehold.co/100/e6e6e6/333333?text=MS",
    category: "email",
  },
  {
    name: "Slack",
    logo: "https://placehold.co/100/e6e6e6/333333?text=Slack",
    category: "communication",
  },
  {
    name: "Google Calendar",
    logo: "https://placehold.co/100/e6e6e6/333333?text=Cal",
    category: "calendar",
  },
  {
    name: "Zoom",
    logo: "https://placehold.co/100/e6e6e6/333333?text=Zoom",
    category: "communication",
  },
  {
    name: "HubSpot",
    logo: "https://placehold.co/100/e6e6e6/333333?text=HS",
    category: "analytics",
  },
  {
    name: "QuickBooks",
    logo: "https://placehold.co/100/e6e6e6/333333?text=QB",
    category: "analytics",
  },
  {
    name: "Mailchimp",
    logo: "https://placehold.co/100/e6e6e6/333333?text=MC",
    category: "email",
  },
];

const IntegrationsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredIntegrations = activeCategory === "all"
    ? integrations
    : integrations.filter(item => item.category === activeCategory);

  return (
    <section id="integrations" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center mb-2">
            <div className="bg-savannah-100 p-2 rounded-lg">
              <Link size={20} className="text-savannah-600" />
            </div>
            <h6 className="text-savannah-600 font-semibold subheading ml-2 tracking-wider">INTEGRATIONS</h6>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-savannah-800 mb-4">Connect With Your Favorite Tools</h2>
          <p className="text-gray-600 text-lg">
            Savannah CRM seamlessly integrates with the tools you already use, creating a unified workflow.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {integrationCategories.map(category => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`rounded-full ${
                activeCategory === category.id 
                  ? "bg-savannah-600 text-white" 
                  : "text-gray-700 hover:bg-savannah-50"
              } font-rubik`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredIntegrations.map((integration, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col items-center text-center card-hover"
            >
              <img 
                src={integration.logo} 
                alt={`${integration.name} logo`}
                className="w-16 h-16 mb-4 rounded"
              />
              <h4 className="font-medium text-savannah-800">{integration.name}</h4>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="btn-secondary">
            View All Integrations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
