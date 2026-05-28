import { motion } from "framer-motion";
import {
  Users,
  TrendingUp,
  ChartBar,
  Calendar,
  Database,
  FileText,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Contact Management",
    description:
      "Centralize customer data for easy access and organization. Track every interaction in one place.",
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
  },
  {
    icon: TrendingUp,
    title: "Sales Pipeline Tracking",
    description:
      "Visualize your entire sales process. Move deals through customizable stages with drag-and-drop ease.",
    gradient: "from-emerald-500/10 to-teal-500/10",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-100",
  },
  {
    icon: ChartBar,
    title: "Analytics Dashboard",
    description:
      "Real-time reporting with actionable insights. Visualize key metrics to drive strategic decisions.",
    gradient: "from-purple-500/10 to-violet-500/10",
    iconColor: "text-purple-600",
    iconBg: "bg-purple-100",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description:
      "Coordinate meetings efficiently. Sync with your favorite calendar apps to avoid scheduling conflicts.",
    gradient: "from-amber-500/10 to-orange-500/10",
    iconColor: "text-amber-600",
    iconBg: "bg-amber-100",
  },
  {
    icon: Database,
    title: "Secure Data Storage",
    description:
      "Enterprise-grade encryption protects all your customer data with unlimited, reliable storage.",
    gradient: "from-rose-500/10 to-pink-500/10",
    iconColor: "text-rose-600",
    iconBg: "bg-rose-100",
  },
  {
    icon: FileText,
    title: "Document Management",
    description:
      "Store, share, and collaborate on documents directly within your CRM workflow.",
    gradient: "from-indigo-500/10 to-sky-500/10",
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-100",
  },
];

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="relative section-padding bg-white overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-savannah-100/40 rounded-full blur-2xl -z-0 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-savannah-50 border border-savannah-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-savannah-500 animate-pulse" />
            <h6 className="text-savannah-700 font-semibold text-xs tracking-widest uppercase">
              Features
            </h6>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-savannah-800 mb-5 tracking-tight">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-savannah-600 to-savannah-500 bg-clip-text text-transparent">
              Manage Relationships
            </span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            ZapCRM offers a comprehensive suite of tools designed to streamline
            your workflows and boost productivity across every team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-[transform,box-shadow] duration-300 ease-out transform-gpu hover:-translate-y-1.5 overflow-hidden"
              >
                {/* Hover gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Corner accent */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-savannah-100/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div
                    className={`${feature.iconBg} ${feature.iconColor} w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 group-hover:rotate-2 transition-transform duration-500 ease-out`}
                  >
                    <Icon size={26} strokeWidth={2.25} />
                  </div>
                  <h3 className="text-xl font-bold text-savannah-800 mb-2 group-hover:text-savannah-600 transition-colors duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-5 flex items-center text-savannah-600 font-medium text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500 ease-out">
                    Learn more
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 bg-gradient-to-r from-savannah-600 to-savannah-700 rounded-2xl p-8 md:p-10 shadow-xl"
        >
          {[
            { value: "10K+", label: "Active Users" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "150+", label: "Integrations" },
            { value: "24/7", label: "Support" },
          ].map((stat, i) => (
            <div key={i} className="text-center text-white">
              <div className="text-3xl md:text-4xl font-extrabold tracking-tight">
                {stat.value}
              </div>
              <div className="text-savannah-100 text-sm mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
