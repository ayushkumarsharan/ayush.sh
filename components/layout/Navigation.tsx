'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Command, Sparkles } from 'lucide-react';
import { siteConfig } from '@/content/site';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { CommandPalette } from '@/components/layout/CommandPalette';

export const Navigation: React.FC<{ onOpenAskAI?: () => void }> = ({ onOpenAskAI }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9990,
          padding: isScrolled ? '0.75rem 1.5rem' : '1.25rem 1.5rem',
          transition: 'all var(--transition-normal)',
          pointerEvents: 'none',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Brand Wordmark / Monogram */}
          <Link
            href="/"
            style={{
              pointerEvents: 'auto',
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              textDecoration: 'none',
              padding: '0.4rem 0.75rem',
              borderRadius: 'var(--radius-md)',
              backgroundColor: isScrolled ? 'var(--bg-translucent)' : 'transparent',
              backdropFilter: isScrolled ? 'blur(12px)' : 'none',
              border: isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
              boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
              transition: 'all var(--transition-fast)',
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '28px',
                height: '28px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--accent-primary)',
                color: '#ffffff',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: '0.85rem',
              }}
            >
              A
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.9rem',
                color: 'var(--text-primary)',
                letterSpacing: '-0.01em',
              }}
            >
              Ayush Sharan
            </span>
          </Link>

          {/* Desktop Floating Pill Menu */}
          <nav
            style={{
              pointerEvents: 'auto',
              display: 'none',
              alignItems: 'center',
              gap: '0.25rem',
              padding: '0.35rem 0.5rem',
              backgroundColor: 'var(--bg-translucent)',
              backdropFilter: 'blur(16px)',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-medium)',
              boxShadow: 'var(--shadow-md)',
            }}
            className="desktop-nav"
          >
            {siteConfig.navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href.replace('/#', ''));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: '0.45rem 0.85rem',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: isActive ? 'var(--bg-surface-elevated)' : 'transparent',
                    border: isActive ? '1px solid var(--border-subtle)' : '1px solid transparent',
                    transition: 'all var(--transition-fast)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    position: 'relative',
                  }}
                  className="nav-link-item"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span
                      style={{
                        fontSize: '0.65rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.1rem 0.35rem',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'var(--accent-subtle)',
                        color: 'var(--accent-primary)',
                        lineHeight: 1,
                      }}
                    >
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Tools (Cmd+K, Theme Toggle, Mobile Menu) */}
          <div
            style={{
              pointerEvents: 'auto',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            {/* Command Palette Trigger */}
            <button
              onClick={() => setIsCommandOpen(true)}
              aria-label="Open Command Palette"
              title="Open Command Palette (Cmd/Ctrl + K)"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--bg-translucent)',
                backdropFilter: 'blur(12px)',
                border: '1px solid var(--border-medium)',
                color: 'var(--text-secondary)',
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
              }}
              className="cmd-trigger-btn"
            >
              <Command size={14} style={{ color: 'var(--accent-primary)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.725rem' }}>⌘K</span>
            </button>

            {/* Optional Ask AI button */}
            {onOpenAskAI && (
              <button
                onClick={onOpenAskAI}
                aria-label="Explore Ayush with AI Assistant"
                title="Ask questions about Ayush"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.45rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--accent-subtle)',
                  border: '1px solid var(--accent-border)',
                  color: 'var(--accent-primary)',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <Sparkles size={14} />
                <span className="ask-ai-text">Ask AI</span>
              </button>
            )}

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-medium)',
                color: 'var(--text-primary)',
                cursor: 'pointer',
              }}
              className="mobile-menu-btn"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'var(--bg-translucent)',
            backdropFilter: 'blur(20px)',
            zIndex: 9980,
            padding: '5rem 1.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            animation: 'fadeIn 0.2s ease-out',
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  padding: '1rem 1.25rem',
                  fontSize: '1.15rem',
                  fontFamily: 'var(--font-display)',
                  color: 'var(--text-primary)',
                  backgroundColor: 'var(--bg-surface)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'var(--accent-subtle)',
                      color: 'var(--accent-primary)',
                    }}
                  >
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>

          <div
            style={{
              padding: '1rem',
              textAlign: 'center',
              fontSize: '0.8rem',
              color: 'var(--text-tertiary)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            AYUSH KUMAR SHARAN • SYSTEMS & CREATIVE TECH
          </div>
        </div>
      )}

      {/* Global Command Palette */}
      <CommandPalette isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} />

      <style jsx global>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 859px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: inline-flex !important;
          }
        }
        @media (max-width: 480px) {
          .ask-ai-text {
            display: none;
          }
        }
      `}</style>
    </>
  );
};
