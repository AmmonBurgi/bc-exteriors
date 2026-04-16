import { motion } from "framer-motion";

const facts = [
  { value: "1967", label: "Year Established" },
  { value: "~2,000", label: "Average Employees" },
  { value: "$3.6B+", label: "Avg Yearly Revenue" },
  { value: "$4B", label: "Bonding Capacity" },
  { value: ".58", label: "EMR" },
  { value: "4", label: "Years Top Workplaces" },
  { value: "30+", label: "Years Top F&B Contractor" },
  { value: "35+", label: "Years Top Builders Nationally" },
];

const QuickFacts = () => (
  <section className="section-padding bg-primary">
    <div className="max-w-7xl mx-auto">
      <motion.h2
        className="font-display text-5xl md:text-7xl text-primary-foreground mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Quick Facts
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {facts.map((fact, i) => (
          <motion.div
            key={fact.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="text-center md:text-left"
          >
            <div className="font-display text-4xl md:text-5xl text-primary-foreground">{fact.value}</div>
            <div className="font-body text-xs md:text-sm text-primary-foreground/70 mt-2 uppercase tracking-wider">
              {fact.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default QuickFacts;
