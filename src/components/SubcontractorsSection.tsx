import { motion } from "framer-motion";

const SubcontractorsSection = () => (
  <section className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
          Sub-<br />contractors
        </h2>
        <h3 className="font-display text-2xl md:text-3xl text-muted-foreground mb-6">
          We would prefer to say partners and friends
        </h3>
        <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Collaborating with first-rate subcontractors is critical to the success of every project we build.
        </p>
        <a
          href="#"
          className="inline-block mt-10 font-body text-sm font-semibold uppercase tracking-widest text-primary border-b-2 border-primary pb-1 hover:opacity-80 transition-opacity"
        >
          Prequalify
        </a>
      </motion.div>
    </div>
  </section>
);

export default SubcontractorsSection;
