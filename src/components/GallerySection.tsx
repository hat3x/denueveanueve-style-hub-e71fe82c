import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-salon-1.jpg";
import gallery2 from "@/assets/gallery-salon-2.jpeg";
import gallery3 from "@/assets/gallery-salon-3.jpeg";
import gallery4 from "@/assets/gallery-salon-4.jpeg";
import gallery5 from "@/assets/gallery-salon-5.jpeg";
import gallery6 from "@/assets/gallery-salon-6.jpeg";
import gallery7 from "@/assets/gallery-salon-7.jpeg";
import gallery8 from "@/assets/gallery-salon-8.jpeg";

const images = [
  { src: gallery1, alt: "Interior del salón Denueveanueve" },
  { src: gallery2, alt: "Zona de peinado y espejos iluminados" },
  { src: gallery3, alt: "Sillones de barbería en Denueveanueve" },
  { src: gallery4, alt: "Zona de estética y peluquería" },
  { src: gallery5, alt: "Área de corte y color" },
  { src: gallery6, alt: "Puestos de peinado Denueveanueve" },
  { src: gallery7, alt: "Vista general del salón" },
  { src: gallery8, alt: "Zona de lavado y tratamientos" },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Nuestro trabajo</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Galería
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden aspect-square group cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-500 flex items-end">
                <p className="font-body text-sm text-primary-foreground p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
