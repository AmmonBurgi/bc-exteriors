import { motion } from "framer-motion";

const companies = [
  { name: "Big-D Companies", location: "National" },
  { name: "Big-D Construction", location: "National" },
  { name: "Big-D Heavy Industrial", location: "National" },
  { name: "Big-D Mission Critical", location: "National" },
  { name: "Big-D Food & Beverage", location: "National" },
  { name: "Big-D Signature", location: "Park City, UT" },
  { name: "Dovetail Construction", location: "Bozeman, MT" },
  { name: "Martin-Harris Construction", location: "Las Vegas, NV" },
  { name: "McAlvain Companies", location: "Boise, ID" },
];

const FamilySection = () => (
  <section className="section-padding bg-card">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
          The Big-D Family<br />Of Companies
        </h2>
        <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-3xl mb-14">
          The Big-D Family of Companies unites industry-leading construction businesses under one
          umbrella, offering a broad range of expertise and services across the nation.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {companies.map((co, i) => (
          <motion.a
            key={co.name}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group flex items-center justify-between p-6 border border-border rounded hover:border-primary transition-colors"
          >
            <div>
              <div className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                {co.name}
              </div>
              <div className="font-body text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                {co.location}
              </div>
            </div>
            <span className="text-muted-foreground group-hover:text-primary transition-colors">→</span>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default FamilySection;
