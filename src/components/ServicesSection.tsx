import { motion } from "framer-motion";
import { Stone, House, Ruler, BrickWall} from "lucide-react";

const services = [
  // { icon: Building2, title: "General Contracting", desc: "Full-service construction management from concept to completion." },
  // { icon: HardHat, title: "Design-Build", desc: "Integrated design and construction for streamlined project delivery." },
  // { icon: Ruler, title: "Preconstruction", desc: "Early planning, budgeting, and value engineering expertise." },
  // { icon: Wrench, title: "Concrete & Structure", desc: "Specialized structural and concrete construction services." },
  { icon: Stone, title: "Stone", desc: "High-quality stone materials and installation services." },
  { icon: Ruler, title: "Siding", desc: "Expert siding installation." },
  { icon: House, title: "Stucco", desc: "Professional stucco application." },
  { icon: BrickWall, title: "Brickwork", desc: "Expert brickwork services." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-card">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">Our Services</h2>
        <p className="font-body text-lg text-muted-foreground mb-14 max-w-xl">
          Uncommon outcomes — our detailed and disciplined processes come from decades of
          listening to our customers and sharpening our skills.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((svc, i) => (
          <motion.div
            key={svc.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-8 border border-border rounded hover:border-primary transition-colors"
          >
            <svc.icon className="text-primary mb-6" size={36} />
            <h3 className="font-display text-2xl text-foreground mb-3">{svc.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
