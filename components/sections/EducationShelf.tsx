"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Star, Medal } from "lucide-react";

export default function EducationShelf() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } },
  };

  return (
    <section 
      id="archive"
      style={{
        padding: '8rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <motion.div
        variants={containerVariants as any}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          variants={itemVariants as any}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            color: 'var(--text-primary)',
            marginBottom: '3rem',
            letterSpacing: '-0.02em',
          }}
        >
          The Archive
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem',
        }}>
          {/* Education Card */}
          <motion.div variants={itemVariants as any} style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ 
                padding: '0.75rem', 
                background: 'rgba(139, 92, 246, 0.1)', 
                borderRadius: 'var(--radius-md)',
                color: 'var(--accent-primary)'
              }}>
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 style={{ 
                  fontFamily: 'var(--font-display)', 
                  fontSize: '1.5rem', 
                  color: 'var(--text-primary)',
                  margin: 0
                }}>Amity University Noida</h3>
                <p style={{ 
                  fontFamily: 'var(--font-mono)', 
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  margin: '0.25rem 0 0 0'
                }}>2020 &mdash; 2024</p>
              </div>
            </div>
            
            <div>
              <p style={{ 
                fontFamily: 'var(--font-body)', 
                color: 'var(--text-primary)',
                fontSize: '1.1rem',
                margin: '0 0 1rem 0'
              }}>B.Tech Information Technology & Computer Science</p>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'baseline', 
                gap: '0.5rem',
                marginBottom: '1rem' 
              }}>
                <span style={{ 
                  fontFamily: 'var(--font-display)', 
                  fontSize: '3.5rem',
                  fontWeight: 'bold',
                  lineHeight: '1',
                  color: 'var(--accent-primary)'
                }}>8.81</span>
                <span style={{ 
                  fontFamily: 'var(--font-mono)', 
                  color: 'var(--text-secondary)' 
                }}>/ 10 CGPA</span>
              </div>
            </div>

            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0, 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.75rem' 
            }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent-warm)' }}>
                <Medal size={16} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}>University Gold Medallist</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                <Star size={16} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}>Shree Baljit Shastri Award for Human Values</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                <Star size={16} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}>First Division with Distinction</span>
              </li>
            </ul>
          </motion.div>

          {/* Awards Card */}
          <motion.div variants={itemVariants as any} style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ 
                padding: '0.75rem', 
                background: 'rgba(245, 158, 11, 0.1)', 
                borderRadius: 'var(--radius-md)',
                color: 'var(--accent-warm)'
              }}>
                <Award size={24} />
              </div>
              <h3 style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '1.5rem', 
                color: 'var(--text-primary)',
                margin: 0
              }}>Awards & Recognition</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{
                padding: '1rem',
                borderLeft: '2px solid var(--accent-warm)',
                background: 'rgba(245, 158, 11, 0.05)',
              }}>
                <h4 style={{ margin: '0 0 0.25rem 0', fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}>Best Paper Award</h4>
                <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-warm)' }}>ICRITO 2024 IEEE</p>
              </div>

              <div style={{ padding: '0 1rem' }}>
                <h4 style={{ margin: '0 0 0.25rem 0', fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}>Most Promising Project</h4>
                <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>InCITe 2024</p>
              </div>

              <div style={{ padding: '0 1rem' }}>
                <h4 style={{ margin: '0 0 0.25rem 0', fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}>1st Place</h4>
                <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Technovate 2024</p>
              </div>

              <div style={{ padding: '0 1rem' }}>
                <h4 style={{ margin: '0 0 0.25rem 0', fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}>Top 2%</h4>
                <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>NPTEL Understanding Design</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div variants={itemVariants as any} style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <BookOpen size={20} color="var(--text-secondary)" />
            <h3 style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: '1.25rem', 
              color: 'var(--text-primary)',
              margin: 0
            }}>Certifications</h3>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            {/* Cloud */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Cloud</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ padding: '0.4rem 0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--text-primary)' }}>AWS SysOps (In Progress)</span>
                <span style={{ padding: '0.4rem 0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--text-primary)' }}>AZ-900</span>
              </div>
            </div>
            
            {/* Networking */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Networking & Security</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ padding: '0.4rem 0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--text-primary)' }}>Cisco CyberOps</span>
                <span style={{ padding: '0.4rem 0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--text-primary)' }}>CCNAv7</span>
                <span style={{ padding: '0.4rem 0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--text-primary)' }}>CCNA Enterprise</span>
              </div>
            </div>

            {/* CS & Design */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>CS & Design</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ padding: '0.4rem 0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--text-primary)' }}>NPTEL ML</span>
                <span style={{ padding: '0.4rem 0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--text-primary)' }}>NPTEL Economics</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
