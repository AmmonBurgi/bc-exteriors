import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-display text-5xl md:text-7xl text-foreground mb-8">About Us</h2>
        <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
          With years of hands-on experience, we’ve turned our passion for quality home exteriors into a business that helps homeowners transform their houses into beautiful, lasting sanctuaries.
        </p>
        <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mt-6">
          We take pride in every detail, offering expert services in siding, roofing, windows, and more, all tailored to withstand Utah’s unique climate. Our commitment is simple: to treat every home like it’s our own. From the first consultation to the final inspection, we’re dedicated to providing exceptional service, innovative solutions, and results that stand the test of time. At B&C Exteriors, your home’s exterior is our canvas—and your satisfaction is our greatest reward.
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
