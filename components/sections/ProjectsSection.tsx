'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/content/projects';

export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants: any = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section id="artifacts" style={{ padding: '8rem 2rem', background: 'var(--bg-primary)', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" as any }}
          style={{ marginBottom: '6rem' }}
        >
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '0 0 1rem 0', color: 'var(--text-primary)' }}>
            Artifacts & Exhibitions
          </h2>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
            Selected implementations where architecture meets purpose. Click any project to reveal the engineering interface.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants as any}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
        >
          {[...projects].reverse().map((project, idx) => (
            <Link key={idx} href={'/projects/' + project.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
              <motion.div
                variants={cardVariants as any}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 1fr)',
                  gap: '2rem',
                  padding: '3rem',
                  background: 'var(--bg-surface)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-subtle)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
              >
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', margin: 0, color: 'var(--text-primary)' }}>
                      {project.title}
                    </h3>
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '800px' }}>
                    {project.summary}
                  </p>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
                    {project.tags.map((tag, i) => (
                      <span key={i} style={{
                        fontFamily: 'var(--font-mono)', fontSize: '0.85rem', padding: '0.4rem 0.8rem',
                        background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-full)', color: 'var(--text-tertiary)'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-primary)',
                    textTransform: 'uppercase', letterSpacing: '0.1em'
                  }}>
                    Read Case Study →
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
