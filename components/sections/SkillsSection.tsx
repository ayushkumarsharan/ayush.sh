'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '@/content/skills';

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 300, damping: 24 } 
    }
  };

  return (
    <section id="skills" style={{ padding: '8rem 2rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ zIndex: 2 }}
        >
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '0 0 1rem 0', color: 'var(--text-primary)' }}>
            Capability Matrix
          </h2>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: 'var(--accent-primary)', maxWidth: '600px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Taxonomy of Systems & Skills
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2rem'
          }}
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.div
              key={key}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)' }}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '2px',
                background: 'linear-gradient(90deg, var(--accent-primary) 0%, transparent 100%)'
              }} />

              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>
                  {category.title}
                </h3>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                  {category.capability}
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {category.description}
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    title={skill.context}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      padding: '0.4rem 0.8rem',
                      background: skill.highlight ? 'rgba(139,92,246,0.15)' : 'rgba(255,255,255,0.03)',
                      border: '1px solid',
                      borderColor: skill.highlight ? 'rgba(139,92,246,0.5)' : 'var(--border-subtle)',
                      borderRadius: '4px',
                      color: skill.highlight ? 'var(--text-primary)' : 'var(--text-secondary)',
                      cursor: 'help'
                    }}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
