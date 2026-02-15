import { motion } from "framer-motion";
import { Scissors, Palette, Sparkles, Wind, User, Hand } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Corte y Peinado",
    description: "Cortes modernos y clásicos adaptados a tu estilo y personalidad. Asesoramiento personalizado.",
  },
  {
    icon: Palette,
    title: "Coloración",
    description: "Tintes de última generación con productos de alta gama para un color vibrante y duradero.",
  },
  {
    icon: Sparkles,
    title: "Mechas",
    description: "Balayage, babylights y técnicas de vanguardia para iluminar tu cabello de forma natural.",
  },
  {
    icon: Wind,
    title: "Alisados y Tratamientos",
    description: "Keratina, botox capilar y tratamientos reparadores para un cabello sano y brillante.",
  },
  {
    icon: User,
    title: "Barbería",
    description: "Corte, arreglo de barba y afeitado clásico con atención al detalle para el hombre moderno.",
  },
  {
    icon: Hand,
    title: "Estética",
    description: "Manicura, pedicura y tratamientos faciales y corporales para tu bienestar integral.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Lo que ofrecemos</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Nuestros Servicios
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-background p-8 border border-border hover:border-gold transition-all duration-500 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <service.icon className="w-8 h-8 text-gold mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
