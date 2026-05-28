import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Sparkles, TrendingUp, Users, Zap } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-savannah-50 via-white to-savannah-100">
      {/* Static background orbs */}
      <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-savannah-300/25 blur-2xl pointer-events-none" />
      <div className="absolute bottom-20 -right-32 w-[28rem] h-[28rem] rounded-full bg-savannah-500/15 blur-2xl pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#1A365D 1px, transparent 1px), linear-gradient(90deg, #1A365D 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-32 md:pb-24 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* Left content */}
          <motion.div
            className="space-y-6 lg:max-w-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-savannah-200 shadow-sm"
            >
              <Sparkles size={14} className="text-savannah-600" />
              <span className="text-xs font-semibold text-savannah-700 tracking-wide">
                NEW · AI-powered insights now available
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-savannah-800 leading-[1.08] tracking-tight">
              Simplify Customer{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-savannah-600 via-savannah-500 to-savannah-700 bg-clip-text text-transparent">
                  Relationships
                </span>
                <motion.span
                  className="absolute bottom-1 left-0 h-3 w-full bg-savannah-200/60 -z-0 rounded"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 0.9, ease }}
                  style={{ originX: 0 }}
                />
              </span>
              .
              <br />
              Amplify <span className="text-savannah-600">Growth</span>.
            </h1>

            <p className="text-base md:text-lg text-gray-700 max-w-lg leading-relaxed">
              ZapCRM helps businesses streamline customer management, boost sales
              performance, and make data-driven decisions with powerful analytics.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                size="lg"
                className="group bg-savannah-600 hover:bg-savannah-700 text-white text-base px-7 py-6 rounded-xl shadow-lg shadow-savannah-600/30 transition-colors duration-300 ease-out"
                onClick={() => scrollTo("pricing")}
              >
                Get Started Free
                <ArrowRight
                  size={18}
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300 ease-out"
                />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group bg-white hover:bg-savannah-50 text-savannah-700 border-savannah-300 hover:border-savannah-500 text-base px-7 py-6 rounded-xl transition-colors duration-300 ease-out"
                onClick={() => scrollTo("contact")}
              >
                <PlayCircle size={18} className="mr-2 text-savannah-600" />
                Watch Demo
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[
                  "from-savannah-400 to-savannah-600",
                  "from-savannah-500 to-savannah-700",
                  "from-savannah-300 to-savannah-500",
                  "from-savannah-600 to-savannah-800",
                ].map((g, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${g} border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-md`}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-savannah-600">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg
                      key={s}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-savannah-700">
                    1,000+ businesses
                  </span>{" "}
                  trust ZapCRM
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            className="relative lg:max-w-xl lg:justify-self-end w-full will-change-transform"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-savannah-400/30 via-savannah-300/20 to-savannah-500/30 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

              {/* Main dashboard card */}
              <div
                className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform-gpu transition-transform duration-500 ease-out hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-3 text-xs text-gray-500 font-medium truncate">
                    app.zapcrm.com / dashboard
                  </span>
                </div>
                <img
                  src="/assets/3fb8e3e4-8780-48d9-91a9-6bf8b1fc00dd.png"
                  alt="ZapCRM Dashboard"
                  className="w-full h-auto block"
                  loading="eager"
                />
              </div>

              {/* Floating stat card 1 */}
              <motion.div
                className="absolute top-12 -left-4 sm:-left-6 bg-white rounded-xl shadow-lg p-3 border border-gray-100 flex items-center gap-3 transform-gpu transition-transform duration-300 ease-out hover:scale-[1.03]"
                initial={{ opacity: 0, x: -12, y: 12 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7, ease }}
              >
                <div className="bg-gradient-to-br from-green-100 to-green-200 p-2 rounded-lg">
                  <TrendingUp className="text-green-600" size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">
                    Sales Growth
                  </div>
                  <div className="text-base font-bold text-savannah-800">
                    +34.2%
                  </div>
                </div>
              </motion.div>

              {/* Floating stat card 2 */}
              <motion.div
                className="absolute bottom-10 -right-4 sm:-right-6 bg-white rounded-xl shadow-lg p-3 border border-gray-100 flex items-center gap-3 transform-gpu transition-transform duration-300 ease-out hover:scale-[1.03]"
                initial={{ opacity: 0, x: 12, y: -12 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.85, duration: 0.7, ease }}
              >
                <div className="bg-gradient-to-br from-savannah-100 to-savannah-200 p-2 rounded-lg">
                  <Users className="text-savannah-600" size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">
                    Active Leads
                  </div>
                  <div className="text-base font-bold text-savannah-800">
                    1,284
                  </div>
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                className="hidden md:flex absolute top-1/2 -right-3 bg-savannah-600 text-white rounded-full px-3 py-1.5 shadow-lg items-center gap-1.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <Zap size={12} className="fill-current" />
                <span className="text-[11px] font-bold">Real-time sync</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="mt-20 pt-10 max-w-6xl mx-auto"
        >
          <p className="text-center text-xs uppercase tracking-widest text-gray-500 font-semibold mb-6">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 opacity-60">
            {["Acme Co.", "Globex", "Initech", "Umbrella", "Stark Ind.", "Wayne Ent."].map(
              (name) => (
                <span
                  key={name}
                  className="text-lg sm:text-xl font-bold text-savannah-700 tracking-tight hover:opacity-100 hover:text-savannah-600 transition duration-500"
                >
                  {name}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
