import { motion } from "framer-motion";
import heroImage from "@/assets/hero-salon.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Interior del salón Denueveanueve"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-gold-light mb-6">
            Peluquería & Centro de Estética
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
            Belleza y estilo
            <br />
            <span className="text-gold italic">de 9 a 9</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 font-light">
            Expertos en cabello y estética con atención personalizada en cada uno de nuestros centros en Madrid
          </p>
          <a
            href="#citas"
            className="inline-flex items-center px-10 py-4 gradient-gold text-primary-foreground font-body text-sm font-semibold tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
          >
            Reservar cita
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-px h-16 bg-primary-foreground/40" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
