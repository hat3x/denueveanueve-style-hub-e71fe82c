import { motion } from "framer-motion";
import stylist1 from "@/assets/stylist-1.jpg";
import stylist2 from "@/assets/stylist-2.jpg";
import stylist3 from "@/assets/stylist-3.jpg";

const team = [
  {
    name: "Laura García",
    role: "Directora Creativa",
    specialty: "Coloración y mechas",
    experience: "+15 años de experiencia",
    image: stylist1,
  },
  {
    name: "Carlos Martín",
    role: "Barbero Senior",
    specialty: "Barbería clásica y moderna",
    experience: "+10 años de experiencia",
    image: stylist2,
  },
  {
    name: "Ana Rodríguez",
    role: "Especialista en Estética",
    specialty: "Tratamientos faciales y corporales",
    experience: "+8 años de experiencia",
    image: stylist3,
  },
];

const TeamSection = () => {
  return (
    <section id="equipo" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Profesionales</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Nuestro Equipo
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="font-body text-sm text-gold font-semibold uppercase tracking-wider mb-2">
                {member.role}
              </p>
              <p className="font-body text-sm text-muted-foreground">{member.specialty}</p>
              <p className="font-body text-xs text-muted-foreground mt-1">{member.experience}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
