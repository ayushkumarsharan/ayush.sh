'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Artifact } from '@/components/ui/Artifact';

import { MindscapeIllustration } from '@/components/features/illustrations/MindscapeIllustration';

export const Identity: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24" style={{ maxWidth: 'var(--container-wide)', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', marginBottom: '1.5rem' }}>How I Think</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', borderLeft: '1px solid var(--border-medium)', paddingLeft: '2rem' }}>
            {[
              { step: 'BUILD', desc: 'Construct the mechanism.' },
              { step: 'BREAK', desc: 'Find the limit.' },
              { step: 'UNDERSTAND', desc: 'Trace the failure.' },
              { step: 'FIX', desc: 'Implement the correction.' },
              { step: 'VERIFY', desc: 'Ensure stability.' }
            ].map((s, i) => (
              <div key={i}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}>0{i+1} - {s.step}</span>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <Artifact type="illustration" title="System Trace" context="Neural Graph">
           <MindscapeIllustration />
        </Artifact>
      </div>
    </section>
  );
};
