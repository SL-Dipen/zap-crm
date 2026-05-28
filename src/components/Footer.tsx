import { Facebook, Twitter, Instagram, Linkedin, Zap, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-savannah-900 text-white overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-savannah-600/15 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-savannah-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="container mx-auto py-16 px-4 relative z-10">
        {/* Newsletter */}
        <div className="border-b border-savannah-700/60 pb-12 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Stay in the loop
              </h3>
              <p className="text-savannah-200 text-sm">
                Product updates, growth tips, and customer stories — straight to
                your inbox.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="relative flex-1">
                <Mail
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-savannah-300"
                />
                <Input
                  type="email"
                  placeholder="you@company.com"
                  required
                  className="bg-savannah-800/60 border-savannah-700 text-white placeholder:text-savannah-300 pl-9 rounded-lg focus-visible:ring-savannah-400"
                />
              </div>
              <Button
                type="submit"
                className="bg-white text-savannah-800 hover:bg-savannah-100 font-semibold rounded-lg px-6"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="col-span-2 space-y-4">
            <a href="/" className="flex items-center gap-2 text-2xl font-extrabold">
              <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-savannah-400 to-savannah-600 flex items-center justify-center shadow-lg">
                <Zap size={18} className="text-white fill-white" />
              </span>
              Zap<span className="text-savannah-400">CRM</span>
            </a>
            <p className="text-savannah-200 text-sm leading-relaxed max-w-xs">
              Empowering businesses to build stronger customer relationships
              with intuitive, powerful CRM tools.
            </p>
            <div className="flex space-x-3">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-savannah-800/60 hover:bg-savannah-600 text-savannah-200 hover:text-white flex items-center justify-center transition-all hover:scale-110"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-sm uppercase tracking-wider text-white">
              Product
            </h4>
            <ul className="space-y-2 text-sm">
              {["Features", "Pricing", "Integrations", "Updates"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-savannah-200 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-sm uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              {["About", "Careers", "Contact", "Blog"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-savannah-200 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-sm uppercase tracking-wider text-white">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              {["Terms", "Privacy", "Cookies", "Security"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-savannah-200 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-savannah-700/60 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-savannah-300 text-sm">
            © {year} ZapCRM. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-savannah-300">Language:</span>
            <select
              className="bg-savannah-800/60 text-savannah-100 border border-savannah-700 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-savannah-500"
              defaultValue="en"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
