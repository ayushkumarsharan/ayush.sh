"use client";

import { motion } from "framer-motion";
import { Mail, FileText, ArrowUp } from "lucide-react";
import { useState } from "react";

const Github = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const Linkedin = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Spotify = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.539-1.56.241z"/>
  </svg>
);

const AppleMusic = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09.136.195.275.39.42.582 1.082 1.447 2.378 3.12 4.028 3.155 1.558.034 2.148-.916 4.024-.916 1.861 0 2.404.916 4.043.882 1.696-.035 2.825-1.523 3.904-2.955 1.258-1.654 1.777-3.255 1.802-3.336-.04-.016-3.136-1.205-3.16-4.802-.023-3.003 2.455-4.444 2.573-4.516-1.41-2.062-3.585-2.355-4.364-2.434-1.666-.17-3.342.92-4.218.92-.88 0-2.24-1.053-3.65-1.03zm.914-1.077c.974-1.178 1.628-2.812 1.448-4.445-1.393.056-3.11 1.027-4.116 2.222-.897 1.07-1.652 2.748-1.439 4.341 1.551.12 3.136-.836 4.107-2.118z"/>
  </svg>
);

export default function ContactSection() {
  const [showPhone, setShowPhone] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const titleVariants: any = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" as any } 
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="contact"
      style={{
        padding: '10rem 2rem 2rem 2rem',
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-subtle)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        variants={containerVariants as any}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <motion.p 
          variants={itemVariants as any}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1.1rem',
            color: 'var(--accent-primary)',
            margin: '0 0 1rem 0',
            letterSpacing: '0.05em',
          }}
        >
          Engineer &middot; Builder &middot; Explorer &middot; Creative &middot; Thinker &middot; Life
        </motion.p>
        
        <motion.p
          variants={itemVariants as any}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            margin: '0 0 4rem 0',
          }}
        >
          There is more here.
        </motion.p>

        <motion.div 
          variants={itemVariants as any}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '4rem',
          }}
        >
          <a href="mailto:ayuskumarsharan@gmail.com" style={linkStyle}>
            <Mail size={20} />
            Email
          </a>
          <a href="https://linkedin.com/in/ayush-kumar-sharan" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a href="https://github.com/ayushkumarsharan" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <Github size={20} />
            GitHub
          </a>
          <a href="https://open.spotify.com/user/31etap5aauilj6c2cgv2gd4j5mme?si=62531c7e26fe4855" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <Spotify size={20} />
            Spotify
          </a>
          <a href="https://music.apple.com/profile/shayusharan48" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <AppleMusic size={20} />
            Apple Music
          </a>
          <a href="/resume" style={linkStyle}>
            <FileText size={20} />
            Resume
          </a>
          
          <button 
            onClick={() => setShowPhone(!showPhone)}
            style={{
              ...linkStyle,
              background: showPhone ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
              cursor: 'pointer',
            }}
          >
            {showPhone ? '+91 (Hidden)' : 'Request Contact'}
          </button>
        </motion.div>

        <motion.div 
          variants={itemVariants as any}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-subtle)',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            color: 'var(--text-secondary)',
            margin: 0,
            textAlign: 'left',
            maxWidth: '500px',
          }}>
            Designed & engineered as a living canvas &mdash; powered by curiosity, precision, and modern web craft.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
            }}>
              &copy; 2026 Ayush Kumar Sharan
            </span>
            <button 
              onClick={scrollToTop}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

const linkStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.75rem 1.25rem',
  background: 'transparent',
  border: '1px solid var(--border-subtle)',
  borderRadius: '100px',
  color: 'var(--text-primary)',
  textDecoration: 'none',
  fontFamily: 'var(--font-body)',
  fontSize: '0.95rem',
  transition: 'all 0.2s ease',
};
