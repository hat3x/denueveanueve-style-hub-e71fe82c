import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoNegro from "@/assets/logo-negro.png";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Localizaciones", href: "#localizaciones" },
  
  { label: "Galería", href: "#galeria" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        <a href="#inicio" className="flex items-center">
          <img src={logoNegro} alt="Denueveanueve" className="h-8 md:h-10" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#citas"
          className="hidden lg:inline-flex items-center px-6 py-2.5 bg-primary text-primary-foreground font-body text-sm font-semibold tracking-wider uppercase hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          Reserva tu cita
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-body text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors uppercase py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#citas"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-body text-sm font-semibold tracking-wider uppercase mt-2"
              >
                Reserva tu cita
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
