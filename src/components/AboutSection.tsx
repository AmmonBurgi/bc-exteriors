import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-display text-5xl md:text-7xl text-foreground mb-8">About Us</h2>
        <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
          You are why we exist, whether you are starting your organization, growing it, or developing
          structures for others, we are here to ensure your building dreams and vision easily become reality.
        </p>
        <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mt-6">
          We do this by putting our people first and being the absolute best company to work for.
          When we provide you a celebrated championship building team armed with the most up to date
          tools and technology, we routinely create raving fans.
        </p>
        <a
          href="#"
          className="inline-block mt-10 font-body text-sm font-semibold uppercase tracking-widest text-primary border-b-2 border-primary pb-1 hover:opacity-80 transition-opacity"
        >
          Learn More
        </a>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
