import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: { monthly: 29, annually: 25 },
    description: "Perfect for small businesses and startups",
    features: [
      "Up to 1,000 contacts",
      "Basic contact management",
      "Email integration",
      "Task management",
      "5GB storage",
      "Email support",
    ],
    highlighted: false,
    cta: "Start for free",
  },
  {
    name: "Professional",
    price: { monthly: 79, annually: 69 },
    description: "Ideal for growing teams and businesses",
    features: [
      "Up to 10,000 contacts",
      "Advanced contact management",
      "Full sales pipeline",
      "Customizable reports",
      "25GB storage",
      "Email & phone support",
      "Team collaboration tools",
      "Automation workflows",
    ],
    highlighted: true,
    cta: "Start free trial",
  },
  {
    name: "Enterprise",
    price: { monthly: 199, annually: 179 },
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
    ],
    highlighted: false,
    cta: "Contact sales",
  },
];

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">(
    "monthly"
  );

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="relative section-padding bg-white overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-savannah-100/40 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-savannah-200/30 rounded-full blur-2xl pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-savannah-50 border border-savannah-200 mb-4">
            <Sparkles size={12} className="text-savannah-600" />
            <h6 className="text-savannah-700 font-semibold text-xs tracking-widest uppercase">
              Pricing
            </h6>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-savannah-800 mb-4 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Choose the plan that works best for your business. No hidden fees,
            cancel anytime.
          </p>

          <div className="bg-savannah-50 rounded-full p-1 inline-flex items-center border border-savannah-200">
            <button
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                billingCycle === "monthly"
                  ? "bg-white text-savannah-700 shadow-md"
                  : "text-gray-600 hover:text-savannah-700"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                billingCycle === "annually"
                  ? "bg-white text-savannah-700 shadow-md"
                  : "text-gray-600 hover:text-savannah-700"
              }`}
              onClick={() => setBillingCycle("annually")}
            >
              Annually
              <span className="text-[10px] px-1.5 py-0.5 bg-green-100 text-green-700 rounded-full font-bold">
                SAVE 15%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-2xl overflow-hidden transition-[transform,box-shadow] duration-300 ease-out transform-gpu hover:-translate-y-1.5 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-savannah-700 to-savannah-800 text-white shadow-xl shadow-savannah-600/25 md:scale-105 z-10"
                  : "bg-white border border-gray-200 shadow-md hover:shadow-lg"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    plan.highlighted ? "text-white" : "text-savannah-800"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    plan.highlighted ? "text-savannah-200" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-5xl font-extrabold ${
                        plan.highlighted ? "text-white" : "text-savannah-800"
                      }`}
                    >
                      $
                      {billingCycle === "monthly"
                        ? plan.price.monthly
                        : plan.price.annually}
                    </span>
                    <span
                      className={`text-sm ${
                        plan.highlighted ? "text-savannah-200" : "text-gray-500"
                      }`}
                    >
                      /mo
                    </span>
                  </div>
                  {billingCycle === "annually" && (
                    <p
                      className={`text-xs mt-1 ${
                        plan.highlighted ? "text-savannah-200" : "text-savannah-600"
                      }`}
                    >
                      Billed annually · ${plan.price.annually * 12}/year
                    </p>
                  )}
                </div>

                <Button
                  onClick={scrollToContact}
                  className={`w-full py-6 rounded-xl font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-white text-savannah-700 hover:bg-savannah-50 shadow-md"
                      : "bg-savannah-600 text-white hover:bg-savannah-700"
                  }`}
                >
                  {plan.cta}
                </Button>

                <div
                  className={`my-6 border-t ${
                    plan.highlighted ? "border-savannah-600" : "border-gray-100"
                  }`}
                />

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          plan.highlighted
                            ? "bg-savannah-500/30"
                            : "bg-savannah-100"
                        }`}
                      >
                        <Check
                          className={`h-3 w-3 ${
                            plan.highlighted ? "text-white" : "text-savannah-600"
                          }`}
                          strokeWidth={3}
                        />
                      </div>
                      <span
                        className={
                          plan.highlighted ? "text-savannah-50" : "text-gray-700"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 mt-10"
        >
          All plans include a 14-day free trial · No credit card required ·
          Cancel anytime
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
