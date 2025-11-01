import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import logo from "@/assets/Xirfadsan-logo.png";
const navigation = [
  { name: "Home", href: "/" },
  { name: "Service", href: "/Service" },
  { name: "About", href: "/About" },
  { name: "Blog", href: "/Blog" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Disable page scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5 rounded-lg flex items-center space-x-2">
            <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center">
              <img
                src={logo}
                alt="logo"
                className="w-6 h-6 object-contain"
              />
            </div>
            <span className="text-xl font-bold text-foreground">
              Xirfadsan
            </span>
          </NavLink>
        </div>

        {/* Mobile + Tablet Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex lg:gap-x-8">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary rounded-lg px-3 py-2 ${isActive ? "text-primary" : "text-muted-foreground"}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Right Section */}
        <div className="hidden md:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <ThemeToggle />
          <Link to="/contact" className="hover:text-foreground transition-colors">
            <Button size="sm" className="bg-primary hover:bg-primary-dark text-primary-foreground font-medium">
              Call us: +252 614057904
            </Button>
          </Link>
        </div>
      </nav>

      {/* Mobile + Tablet Fullscreen Vertical Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden ">
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed inset-0 z-50 flex flex-col bg-black/60 backdrop-blur-md p-6 animate-slideInRight text-white">
            <div className="flex items-center justify-between mb-8">
              <NavLink to="/" className="-m-1.5 p-1.5 rounded-lg flex items-center space-x-2">
                <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center">
                  <img
                    src="src/assets/Xirfadsan-logo.png"
                    alt="logo"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <span className="text-xl font-bold">
                  Xirfadsan
                </span>
              </NavLink>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 flex flex-col justify-start space-y-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `block text-lg font-medium px-3 py-2 rounded-lg transition-colors hover:text-primary ${isActive ? "text-primary bg-white/20" : "text-white/90"}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Call Button */}
            <div className="mt-auto pt-6">
              <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-medium">
                Call us: +252 614057904
              </Button>
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
