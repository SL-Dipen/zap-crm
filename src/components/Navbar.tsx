import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const navItems = [
  { id: "features", label: "Features", section: true },
  { id: "products", label: "Products", section: true },
  { id: "testimonials", label: "Testimonials", section: true },
  { id: "pricing", label: "Pricing", section: true },
  { id: "/about", label: "About", section: false },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const sections = ["features", "products", "testimonials", "pricing", "contact"];
    let ticking = false;
    let lastScrolled = false;
    let lastActive = "";

    const update = () => {
      const y = window.scrollY;
      const scrolled = y > 20;
      if (scrolled !== lastScrolled) {
        lastScrolled = scrolled;
        setIsScrolled(scrolled);
      }

      const scrollPos = y + 120;
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            current = id;
            break;
          }
        }
      }
      if (current !== lastActive) {
        lastActive = current;
        setActiveSection(current);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    if (window.location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 h-16 flex items-center transition-[background-color,box-shadow,border-color] duration-300 ease-out ${
        isScrolled
          ? "bg-white shadow-[0_2px_12px_-4px_rgba(26,54,93,0.12)] border-b border-gray-100"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 max-w-full w-full">
        <a
          href="/"
          className="flex items-center gap-2 text-xl sm:text-2xl font-extrabold text-savannah-800 group"
        >
          <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-savannah-500 to-savannah-700 flex items-center justify-center shadow-md shadow-savannah-500/20 group-hover:scale-110 transition-transform">
            <Zap size={18} className="text-white fill-white" />
          </span>
          <span>
            Zap<span className="text-savannah-500">CRM</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) =>
            item.section ? (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeSection === item.id
                    ? "text-savannah-700"
                    : "text-gray-700 hover:text-savannah-600"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-savannah-600 rounded-full" />
                )}
              </button>
            ) : (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="px-3.5 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-savannah-600 transition-colors"
              >
                {item.label}
              </button>
            )
          )}
          <Button
            className="ml-3 bg-gradient-to-r from-savannah-600 to-savannah-700 hover:from-savannah-700 hover:to-savannah-800 text-white px-5 py-2 rounded-lg font-medium shadow-md shadow-savannah-600/20 hover:shadow-lg hover:shadow-savannah-600/30 transition-all duration-200"
            onClick={() => handleNavClick("pricing")}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700 p-2 rounded-md hover:bg-savannah-50 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 shadow-lg">
          <div className="flex flex-col p-4 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() =>
                  item.section ? handleNavClick(item.id) : handleNavigation(item.id)
                }
                className="text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-savannah-50 hover:text-savannah-600 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button
              className="mt-2 bg-gradient-to-r from-savannah-600 to-savannah-700 text-white rounded-lg font-medium w-full"
              onClick={() => handleNavClick("pricing")}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
