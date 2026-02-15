import { Instagram, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl font-bold mb-4">Denueveanueve</h3>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
              Belleza y estilo de 9 a 9. Tu peluquería y centro de estética de confianza en Madrid.
            </p>
          </div>

          {/* Horarios */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Horarios</h4>
            <div className="font-body text-sm text-primary-foreground/70 space-y-2">
              <p>Lunes a Viernes: 9:00 - 21:00</p>
              <p>Sábado: 9:00 - 21:00</p>
              <p>Domingo: Cerrado</p>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <a href="tel:+34918510000" className="flex items-center gap-3 font-body text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                <Phone className="w-4 h-4" />
                +34 918 51 XX XX
              </a>
              <a href="mailto:info@denueveanueve.es" className="flex items-center gap-3 font-body text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                <Mail className="w-4 h-4" />
                info@denueveanueve.es
              </a>
            </div>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-primary-foreground/50">
            © 2025 Denueveanueve. Todos los derechos reservados.
          </p>
          <a href="#" className="font-body text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors">
            Política de Privacidad
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
