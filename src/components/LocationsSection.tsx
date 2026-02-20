import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const locations = [
  {
    name: "Collado Villalba",
    address: "C/ Azuela, 36, Polígono P-29, 28400 Collado Villalba, Madrid",
    phone: "+34 918 51 XX XX",
    hours: "Lun - Sáb: 9:00 - 21:00",
  },
  {
    name: "Alpedrete",
    address: "C/ Betanzos, 1, Local 5, 28430 Alpedrete, Madrid",
    phone: "+34 918 57 XX XX",
    hours: "Lun - Sáb: 9:00 - 21:00",
  },
  {
    name: "Boadilla del Monte",
    address: "Av. Infante Don Luis, 8, 28660 Boadilla del Monte, Madrid",
    phone: "+34 916 33 XX XX",
    hours: "Lun - Sáb: 9:00 - 21:00",
  },
];

const LocationsSection = () => {
  return (
    <section id="localizaciones" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Encuéntranos</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Nuestros Centros
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc, index) => (
            <motion.div
              key={loc.name}
              className="border border-border p-8 text-center hover:border-gold transition-colors duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                {loc.name}
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start justify-center gap-3">
                  <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                  <span className="font-body text-muted-foreground">{loc.address}</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  <span className="font-body text-muted-foreground">{loc.phone}</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Clock className="w-4 h-4 text-gold shrink-0" />
                  <span className="font-body text-muted-foreground">{loc.hours}</span>
                </div>
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-8 px-6 py-2.5 border border-gold text-gold font-body text-xs font-semibold tracking-[0.15em] uppercase hover:bg-gold hover:text-accent-foreground transition-colors"
              >
                Ver en mapa
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
