'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '@/content/experience';
import { M2PIllustration } from '@/components/features/illustrations/M2PIllustration';
import { ThalesIllustration } from '@/components/features/illustrations/ThalesIllustration';
import { TechMahindraIllustration } from '@/components/features/illustrations/TechMahindraIllustration';

export default function WorkSection() {
  return (
    <section id="work" style={{
      position: 'relative',
      padding: '8rem 2rem',
      backgroundColor: 'var(--bg-primary)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 5vw, 5rem)',
            fontWeight: 700,
            marginBottom: '6rem',
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)'
          }}
        >
          Work & Evidence
        </motion.h2>

        {/* Timeline line */}
        <div style={{
          position: 'absolute',
          left: '24px',
          top: '8rem',
          bottom: '0',
          width: '1px',
          backgroundColor: 'var(--border-subtle)',
          zIndex: 0
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 1;
            
            return (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                  display: 'flex',
                  flexDirection: isEven ? 'row-reverse' : 'row',
                  gap: '4rem',
                  position: 'relative',
                  alignItems: 'center',
                  flexWrap: 'wrap'
                }}
              >
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute',
                  left: '20px',
                  top: '50px',
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-primary)',
                  zIndex: 1,
                  boxShadow: '0 0 10px var(--accent-primary)'
                }} />

                {/* Content Side */}
                <div style={{ flex: '1 1 400px', paddingLeft: '4rem' }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '0.5rem'
                  }}>
                    {exp.period}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.5rem',
                    fontWeight: 600,
                    marginBottom: '0.5rem',
                    lineHeight: 1.1
                  }}>
                    {exp.company}
                  </h3>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--accent-primary)',
                    fontSize: '1rem',
                    marginBottom: '1.5rem'
                  }}>
                    {'{ '} {exp.role} {' }'}
                  </div>
                  
                  <p style={{
                    fontSize: '1.125rem',
                    fontStyle: 'italic',
                    color: 'var(--text-secondary)',
                    marginBottom: '1.5rem',
                    lineHeight: 1.6
                  }}>
                    "{exp.frame}"
                  </p>

                  <ul style={{
                    listStyleType: 'none',
                    padding: 0,
                    margin: '0 0 2rem 0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem'
                  }}>
                    {exp.highlights.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <span style={{ color: 'var(--accent-primary)', marginTop: '2px' }}>{'>'}</span>
                        <span style={{ color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {exp.tags.map(tag => (
                      <span key={tag} style={{
                        padding: '0.25rem 0.75rem',
                        backgroundColor: 'rgba(139, 92, 246, 0.1)',
                        border: '1px solid rgba(139, 92, 246, 0.2)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-primary)'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Artifact Side */}
                <div style={{ flex: '1 1 400px' }}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background: 'var(--bg-surface)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      minHeight: '300px',
                      boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    {/* Decorative gradient blob */}
                    <div style={{
                      position: 'absolute',
                      top: '-50%',
                      left: '-50%',
                      width: '200%',
                      height: '200%',
                      background: 'radial-gradient(circle at center, rgba(139,92,246,0.1) 0%, transparent 50%)',
                      zIndex: 0,
                      pointerEvents: 'none'
                    }} />

                    <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '100%', height: '100%' }}>
                      {exp.id === 'm2p' && <M2PIllustration />}
                      {exp.id === 'thales' && <ThalesIllustration />}
                      {exp.id === 'tech-mahindra' && <TechMahindraIllustration />}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
