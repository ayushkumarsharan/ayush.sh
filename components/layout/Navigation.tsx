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
      if (window.scrollY > 20) {
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
          zIndex: 9999,
          padding: isScrolled ? '0.65rem 1rem' : '0.9rem 1.25rem',
          backgroundColor: 'var(--bg-translucent)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: isScrolled ? '1px solid var(--border-medium)' : '1px solid var(--border-subtle)',
          boxShadow: isScrolled ? 'var(--shadow-md)' : 'none',
          transition: 'all var(--transition-normal)',
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
          {/* Brand Wordmark & Active Pulse */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              textDecoration: 'none',
              padding: '0.35rem 0.6rem',
              borderRadius: 'var(--radius-md)',
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
                boxShadow: '0 0 12px var(--accent-glow)',
              }}
            >
              A
            </span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '0.925rem',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.2,
                }}
              >
                Ayush Sharan
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.1rem' }}>
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-primary)',
                    boxShadow: '0 0 6px var(--accent-primary)',
                  }}
                  className="pulse-dot"
                />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--accent-primary)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  Active
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Floating Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.2rem',
              padding: '0.3rem 0.4rem',
              backgroundColor: 'var(--bg-surface-elevated)',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-medium)',
              boxShadow: 'var(--shadow-sm)',
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
                    padding: '0.4rem 0.8rem',
                    fontSize: '0.825rem',
                    fontWeight: 500,
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: isActive ? 'var(--bg-surface)' : 'transparent',
                    border: isActive ? '1px solid var(--border-subtle)' : '1px solid transparent',
                    transition: 'all var(--transition-fast)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    position: 'relative',
                  }}
                  className="nav-link-item"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span
                      style={{
                        fontSize: '0.625rem',
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

          {/* Action Tools (Cmd+K, Ask AI, Theme Toggle, Mobile Menu) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
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
                padding: '0.4rem 0.7rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--bg-surface-elevated)',
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

            {/* Ask AI button */}
            {onOpenAskAI && (
              <button
                onClick={onOpenAskAI}
                aria-label="Explore Ayush with AI Assistant"
                title="Ask questions about Ayush"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.4rem 0.75rem',
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
                width: '36px',
                height: '36px',
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
            backdropFilter: 'blur(24px)',
            zIndex: 9998,
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
                  padding: '0.875rem 1.25rem',
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
        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.6; }
        }
        .pulse-dot {
          animation: pulseGlow 2.5s infinite ease-in-out;
        }
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
