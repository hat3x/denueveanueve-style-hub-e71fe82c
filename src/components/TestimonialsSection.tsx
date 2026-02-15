import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María López",
    location: "Collado Villalba",
    text: "Llevo años viniendo a Denueveanueve y siempre salgo encantada. El equipo es profesional, cercano y siempre al día con las últimas tendencias.",
    rating: 5,
  },
  {
    name: "Javier Fernández",
    location: "Alpedrete",
    text: "La mejor barbería de la zona sin duda. Atención de primera, ambiente genial y el resultado siempre impecable. Muy recomendable.",
    rating: 5,
  },
  {
    name: "Sofía Ruiz",
    location: "Boadilla del Monte",
    text: "Me hicieron un balayage espectacular. El color quedó natural y luminoso. Además los tratamientos capilares dejan el pelo increíble.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="opiniones" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Opiniones</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Lo que dicen nuestros clientes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              className="border border-primary-foreground/20 p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-body text-sm leading-relaxed text-primary-foreground/80 mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-display font-semibold">{t.name}</p>
                <p className="font-body text-xs text-primary-foreground/60">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
