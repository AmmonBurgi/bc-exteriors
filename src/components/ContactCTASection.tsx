import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import hero5 from "@/assets/hero-5.webp";

const ContactCTASection = () => {
  const navigate = useNavigate();

  return (
    <section id="contact-cta" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded aspect-[4/3]"
          >
            <img
              src={hero5}
              alt="B&C Exteriors work"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/20" />
          </motion.div>

          {/* Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center gap-6"
          >
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-none">
              Get In Touch
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-md">
              Ready to start your next project? Contact us today for a free, no-obligation quote tailored to your needs.
            </p>
            <div>
              <button
                onClick={() => navigate("/quote")}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded font-semibold text-lg hover:bg-primary/90 transition-colors"
              >
                Request a Quote
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTASection;
