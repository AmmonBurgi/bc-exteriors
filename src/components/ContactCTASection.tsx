import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  { label: "Commercial", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80" },
  { label: "Industrial", image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&q=80" },
  { label: "Multi-Family", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80" },
  { label: "Healthcare", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80" },
];

const ContactCTASection = () => {
  const navigate = useNavigate();

  return (
    <section id="contact-cta" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-10"
        >
          <h2 className="font-display text-5xl md:text-7xl text-foreground">Get In Touch</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative overflow-hidden rounded aspect-[4/5]"
            >
              <img
                src={card.image}
                alt={card.label}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-background/50" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <p className="text-muted-foreground text-lg max-w-xl">
            Ready to start your next project? Contact us today for a free, no-obligation quote tailored to your needs.
          </p>
          <button
            onClick={() => navigate("/quote")}
            className="flex-shrink-0 flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded font-semibold text-lg hover:bg-primary/90 transition-colors"
          >
            Request a Quote
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTASection;
