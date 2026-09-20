'use client';
import { motion, useScroll } from "framer-motion";

export const GlobalScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'var(--accent-primary)',
        transformOrigin: '0%',
        scaleX: scrollYProgress,
        zIndex: 9999,
        boxShadow: '0 0 10px var(--accent-primary)'
      }}
    />
  );
};
