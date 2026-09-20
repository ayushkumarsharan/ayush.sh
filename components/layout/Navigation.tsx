'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ModeSwitcher from '@/components/ui/ModeSwitcher';
import Link from 'next/link';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Artifacts', href: '/#artifacts' },
    { name: 'Tools', href: '/#tools' },
    { name: 'Certifications', href: '/#certifications' },
    { name: 'Contact', href: '/#contact' }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'var(--bg-surface)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        color: 'var(--text-primary)'
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '1.2rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Link 
          href="/" 
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            letterSpacing: '0.08em',
            fontSize: '1rem',
            textDecoration: 'none',
            color: 'inherit',
            textTransform: 'uppercase'
          }}
        >
          AYUSH KUMAR SHARAN
        </Link>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'flex',
            gap: '2.5rem',
            alignItems: 'center'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              style={{
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textDecoration: 'none',
                color: 'inherit',
                opacity: 0.7,
                transition: 'opacity 0.2s ease, color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
            >
              {link.name}
            </Link>
          ))}
          <ModeSwitcher />
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          style={{
            background: 'none',
            border: 'none',
            color: 'inherit',
            cursor: 'pointer',
            padding: '0.5rem',
          }}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: 'var(--bg-surface-elevated)',
              borderBottom: '1px solid var(--border-subtle)',
              overflow: 'hidden',
              color: 'var(--text-primary)',
              backdropFilter: 'blur(30px) saturate(200%)'
            }}
          >
            <nav
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '2rem',
                gap: '2rem'
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                    fontSize: '1rem',
                    letterSpacing: '0.1em',
                    textDecoration: 'none',
                    color: 'inherit',
                    opacity: 0.9
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <div style={{ marginTop: '1rem', paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', opacity: 0.6, marginBottom: '1rem' }}>ATMOSPHERE</p>
                <ModeSwitcher />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
