import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { name: "Commercial", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80" },
  { name: "Data Centers", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80" },
  { name: "Educational", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80" },
  { name: "Healthcare", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80" },
  { name: "Hospitality", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80" },
  { name: "Industrial", image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&q=80" },
  { name: "Multi-Family", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80" },
  { name: "Sports & Entertainment", image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=600&q=80" },
];

const ProjectCategories = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section id="projects" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-10"
        >
          <h2 className="font-display text-5xl md:text-7xl text-foreground">Our Work</h2>
          <div className="hidden md:flex gap-3">
            <button onClick={() => scroll(-1)} className="p-2 border border-border rounded text-muted-foreground hover:text-primary hover:border-primary transition-colors" aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => scroll(1)} className="p-2 border border-border rounded text-muted-foreground hover:text-primary hover:border-primary transition-colors" aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#"
              className="group flex-shrink-0 w-72 md:w-80 snap-start"
            >
              <div className="relative overflow-hidden rounded aspect-[4/5]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="font-display text-2xl text-foreground">{cat.name}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCategories;
