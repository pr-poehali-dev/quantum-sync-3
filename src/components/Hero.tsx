import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/b113ca18-11ec-4030-b533-990b519e4fa9/files/26277da3-beb5-47ee-9c20-8ed1662d619b.jpg"
          alt="MultiCraft world"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 drop-shadow-lg">
          MULTICRAFT
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90 drop-shadow-md">
          Донат-магазин — привилегии, валюта и уникальные возможности для твоего приключения
        </p>
        <a
          href="#donate"
          className="inline-block mt-8 bg-yellow-400 text-black font-bold uppercase tracking-wide px-8 py-3 text-sm hover:bg-yellow-300 transition-colors duration-300"
        >
          Купить сейчас
        </a>
      </div>
    </div>
  );
}