
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter",
    price: {
      monthly: 29,
      annually: 25
    },
    description: "Perfect for small businesses and startups",
    features: [
      "Up to 1,000 contacts",
      "Basic contact management",
      "Email integration",
      "Task management",
      "5GB storage",
      "Email support"
    ],
    highlighted: false,
    cta: "Start for free"
  },
  {
    name: "Professional",
    price: {
      monthly: 79,
      annually: 69
    },
    description: "Ideal for growing teams and businesses",
    features: [
      "Up to 10,000 contacts",
      "Advanced contact management",
      "Full sales pipeline",
      "Customizable reports",
      "25GB storage",
      "Email & phone support",
      "Team collaboration tools",
      "Automation workflows"
    ],
    highlighted: true,
    cta: "Start free trial"
  },
  {
    name: "Enterprise",
    price: {
      monthly: 199,
      annually: 179
    },
    description: "For large organizations with complex needs",
    features: [
      "Unlimited contacts",
      "Enterprise-grade security",
      "Advanced analytics",
      "Dedicated account manager",
      "Unlimited storage",
      "24/7 priority support",
      "Custom integrations",
      "API access",
      "On-premises deployment option"
    ],
    highlighted: false,
    cta: "Contact sales"
  }
];

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');

  return (
    <section id="pricing" className="section-padding bg-savannah-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h6 className="text-savannah-600 font-semibold subheading mb-2 tracking-wider">PRICING</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-savannah-800 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 text-lg mb-8">
            Choose the plan that works best for your business needs. No hidden fees.
          </p>
          
          <div className="bg-white rounded-full p-1 inline-flex ui-element shadow-sm">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                billingCycle === 'monthly' 
                  ? 'bg-savannah-600 text-white' 
                  : 'text-gray-600 hover:bg-savannah-50'
              }`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                billingCycle === 'annually' 
                  ? 'bg-savannah-600 text-white' 
                  : 'text-gray-600 hover:bg-savannah-50'
              }`}
              onClick={() => setBillingCycle('annually')}
            >
              Annually <span className="text-xs ml-1 text-savannah-500">Save 15%</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-[1.02] ${
                plan.highlighted ? 'border-2 border-savannah-500 ring-2 ring-savannah-200' : 'border border-gray-100'
              }`}
            >
              {plan.highlighted && (
                <div className="bg-savannah-600 text-white py-1 px-4 text-center text-sm font-bold ui-element">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-savannah-800">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{plan.description}</p>
                </div>
                
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-savannah-800">
                    ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.annually}
                  </span>
                  <span className="text-gray-600 ml-1">/month</span>
                  
                  {billingCycle === 'annually' && (
                    <p className="text-xs text-savannah-600 mt-1">Billed annually</p>
                  )}
                </div>
                
                <Button 
                  className={`w-full ui-element ${
                    plan.highlighted
                      ? 'bg-savannah-600 text-white hover:bg-savannah-700'
                      : 'bg-savannah-50 text-savannah-700 hover:bg-savannah-100'
                  }`}
                >
                  {plan.cta}
                </Button>
                
                <div className="border-t border-gray-100 my-6"></div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="h-5 w-5 text-savannah-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
