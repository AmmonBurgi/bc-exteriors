import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const slides = [
  { image: hero1, title: "Building Excellence", subtitle: "Since 1967" },
  { image: hero2, title: "Commercial Construction", subtitle: "World-Class Results" },
  { image: hero3, title: "Industrial Solutions", subtitle: "Precision & Scale" },
  { image: hero4, title: "Mission Critical", subtitle: "Data Center Experts" },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-background/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full pb-24 px-6 md:px-12 lg:px-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-foreground leading-none">
              {slides[current].title}
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mt-4 tracking-wide">
              {slides[current].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex items-center gap-6 mt-10">
          <button onClick={prev} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Previous">
            <ChevronLeft size={28} />
          </button>
          <span className="font-body text-sm text-muted-foreground tracking-widest">
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
          <button onClick={next} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Next">
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
