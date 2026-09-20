'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { interestsData } from '@/content/interests';

export default function InterestsSection() {
  const [activeStory, setActiveStory] = useState(interestsData.stories[0].id);

  return (
    <section id="interests" style={{ padding: '8rem 2rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ marginBottom: '4rem' }}
        >
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '0 0 1rem 0', color: 'var(--text-primary)' }}>
            {interestsData.headline}
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: 1.6 }}>
            {interestsData.intro}
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem' }}>
          {/* Navigation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderLeft: '1px solid var(--border-subtle)' }}>
            {interestsData.stories.map((story) => {
              const isActive = activeStory === story.id;
              return (
                <button
                  key={story.id}
                  onClick={() => setActiveStory(story.id)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    padding: '1rem 2rem',
                    cursor: 'pointer',
                    position: 'relative',
                    color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.2rem',
                    transition: 'color 0.3s'
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeInterestIndicator"
                      style={{ position: 'absolute', left: '-1px', top: 0, bottom: 0, width: '2px', background: 'var(--accent-primary)' }}
                    />
                  )}
                  {story.theme}
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div style={{ position: 'relative', minHeight: '300px' }}>
            <AnimatePresence mode="wait">
              {interestsData.stories.map((story) => {
                if (story.id !== activeStory) return null;
                return (
                  <motion.div
                    key={story.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    style={{ position: 'absolute', inset: 0 }}
                  >
                    <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', fontSize: '1rem', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
                      {story.statement}
                    </div>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '2rem' }}>
                      {story.narrative}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                      {story.disciplines.map((d, i) => (
                        <span key={i} style={{ padding: '0.4rem 1rem', borderRadius: '100px', border: '1px solid var(--border-subtle)', background: 'var(--bg-surface)', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                          {d}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ marginTop: '8rem', padding: '3rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-lg)' }}
        >
          <h3 style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '2rem', textTransform: 'uppercase' }}>Active Curiosities</h3>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', padding: 0, listStyle: 'none' }}>
            {interestsData.curiosities.map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                <span style={{ color: 'var(--accent-primary)' }}>?</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
