import { motion } from "framer-motion";

const MissionSection = () => (
  <section className="section-padding bg-background">
    <div className="max-w-6xl mx-auto text-center">
      <motion.p
        className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Our Mission
      </motion.p>
      <motion.h2
        className="font-display text-4xl md:text-6xl lg:text-8xl text-foreground leading-tight"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        We're on a mission to be the most sought-after construction company in the business
      </motion.h2>
    </div>
  </section>
);

export default MissionSection;
