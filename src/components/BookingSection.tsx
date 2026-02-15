import { motion } from "framer-motion";

const BookingSection = () => {
  return (
    <section id="citas" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Reservas</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Reserva tu cita
          </h2>
          <p className="font-body text-muted-foreground mb-10">
            Llámanos directamente o visítanos en cualquiera de nuestros centros. Estaremos encantados de atenderte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+34918510000"
              className="inline-flex items-center justify-center px-10 py-4 gradient-gold text-primary-foreground font-body text-sm font-semibold tracking-[0.15em] uppercase hover:opacity-90 transition-opacity"
            >
              Llamar ahora
            </a>
            <a
              href="#localizaciones"
              className="inline-flex items-center justify-center px-10 py-4 border border-foreground text-foreground font-body text-sm font-semibold tracking-[0.15em] uppercase hover:bg-foreground hover:text-background transition-colors"
            >
              Ver centros
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
