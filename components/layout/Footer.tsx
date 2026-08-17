'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Mail, Phone, ExternalLink } from 'lucide-react';
import { profile } from '@/content/profile';
import { siteConfig } from '@/content/site';

const LinkedinIcon = ({ size = 15, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: 'var(--space-16)',
        paddingBottom: 'var(--space-12)',
        position: 'relative',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--space-12)',
            marginBottom: 'var(--space-16)',
          }}
        >
          {/* Column 1: Identity */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                color: 'var(--text-primary)',
                marginBottom: 'var(--space-2)',
              }}
            >
              {profile.name}
            </div>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--accent-primary)',
                marginBottom: 'var(--space-4)',
                letterSpacing: '0.04em',
              }}
            >
              {profile.identity}
            </p>
            <p
              style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                maxWidth: '380px',
              }}
            >
              A digital home, personal archive, and sandbox for engineering, research, and creative exploration.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--text-tertiary)',
                marginBottom: 'var(--space-4)',
              }}
            >
              Exploration
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.9rem' }}>
              <li>
                <Link href="/#work" style={{ color: 'var(--text-secondary)', transition: 'color 0.15s' }}>
                  Professional Experience
                </Link>
              </li>
              <li>
                <Link href="/#intersection" style={{ color: 'var(--text-secondary)', transition: 'color 0.15s' }}>
                  The Intersection Map
                </Link>
              </li>
              <li>
                <Link href="/research" style={{ color: 'var(--text-secondary)', transition: 'color 0.15s' }}>
                  IEEE Research Blueprint
                </Link>
              </li>
              <li>
                <Link href="/lab" style={{ color: 'var(--text-secondary)', transition: 'color 0.15s' }}>
                  Living Lab Archive
                </Link>
              </li>
              <li>
                <Link href="/now" style={{ color: 'var(--text-secondary)', transition: 'color 0.15s' }}>
                  Now Page (Current Focus)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Coordinates */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--text-tertiary)',
                marginBottom: 'var(--space-4)',
              }}
            >
              Coordinates
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <Mail size={15} style={{ color: 'var(--accent-primary)' }} />
                  <span>{profile.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <LinkedinIcon size={15} color="var(--accent-primary)" />
                  <span>linkedin.com/in/ayush-kumar-sharan</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <Phone size={15} style={{ color: 'var(--accent-primary)' }} />
                  <span>{profile.phone}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: 'var(--space-8)',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-4)',
            fontSize: '0.8rem',
            color: 'var(--text-tertiary)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <div>
            <span>{profile.footerNote}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span>© {new Date().getFullYear()} Ayush Kumar Sharan</span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              title="Back to top"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-medium)',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
              }}
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
