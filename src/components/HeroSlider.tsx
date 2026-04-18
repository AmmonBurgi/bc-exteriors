import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const slides = [
  {
    image: hero1,
    tag: "Our Story",
    title: "Built on Trust",
    subtitle: "Decades of hands-on experience transforming Utah homes",
  },
  {
    image: hero2,
    tag: "Stone & Masonry",
    title: "Timeless Materials",
    subtitle: "High-quality stone and expert masonry installation",
  },
  {
    image: hero3,
    tag: "Siding & Stucco",
    title: "Lasting Protection",
    subtitle: "Professional siding and stucco built for every season",
  },
  {
    image: hero4,
    tag: "Get a Quote",
    title: "Your Home, Our Canvas",
    subtitle: "Free, no-obligation quotes — we treat every home like our own",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 7500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background images */}
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

      {/* Slide content */}
      <div className="relative z-10 flex flex-col justify-end h-full pb-24 px-6 md:px-12 lg:px-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4">
              {slides[current].tag}
            </p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-foreground leading-none">
              {slides[current].title}
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mt-4 tracking-wide max-w-2xl">
              {slides[current].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lower hover zone — reveals nav arrows on hover */}
      <div className="group/lower absolute inset-x-0 bottom-0 h-full z-20">
        <button
          onClick={prev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover/lower:opacity-100 transition-opacity duration-300 text-foreground/60 hover:text-primary"
          aria-label="Previous slide"
        >
          <ChevronLeft size={40} strokeWidth={1.5} />
        </button>
        <button
          onClick={next}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover/lower:opacity-100 transition-opacity duration-300 text-foreground/60 hover:text-primary"
          aria-label="Next slide"
        >
          <ChevronRight size={40} strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;
