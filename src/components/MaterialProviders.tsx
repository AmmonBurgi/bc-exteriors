import { motion } from "framer-motion";
import { link } from "fs";

const providers = [
  {
    name: "Lansing Building Products",
    desc: "",
    link: "https://www.lansingnow.com/visitor/gallery?categorylvl1=Siding",
  },
  {
    name: "Stone World",
    desc: "",
    link: "https://stoneworldsupply.com/products/",
  },
  {
    name: "James Hardie",
    desc: "",
    link: "https://www.jameshardie.com/",
  },
  {
    name: "TrueExterior",
    desc: "",
    link: "https://www.westlakeroyalbuildingproducts.com/siding-and-accessories/truexterior",
  },
];

const MaterialProviders = () => (
  <section id="material-providers" className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
          Material Providers
        </h2>
        <h3 className="font-display text-2xl md:text-3xl text-muted-foreground mb-6">
          Find your dream materials with our trusted network of suppliers.
        </h3>
        <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl">
          We work with a network of trusted material providers to ensure our projects are built with the highest quality materials.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {providers.map((provider, i) => (
            <motion.div
              key={provider.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 border border-border rounded hover:border-primary transition-colors"
              onClick={() => window.open(provider.link, "_blank")}
              style={{ cursor: "pointer" }}
            >
              <h3 className="font-display text-2xl text-foreground mb-3">
                {provider.name}
              </h3>
              {/* <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {provider.desc}
              </p> */}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default MaterialProviders;
