'use client';
import React from 'react';
import { motion } from 'framer-motion';

export const Arrival: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24" style={{ maxWidth: 'var(--container-wide)', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
        style={{ maxWidth: '800px' }}
      >
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: 400,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          marginBottom: '1rem'
        }}>
          AYUSH KUMAR SHARAN
        </h1>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.85rem',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          color: 'var(--accent-primary)',
          marginBottom: '3rem'
        }}>
          Engineer &middot; Builder &middot; Problem Solver
        </p>

        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          maxWidth: '600px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>
          <p>
            I like understanding what happens underneath things — especially when something breaks.
          </p>
          <p style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
            Understand the system. Find the problem. Build the solution. Make it useful.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
