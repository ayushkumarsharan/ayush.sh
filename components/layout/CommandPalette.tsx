'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Search,
  Briefcase,
  Layers,
  FlaskConical,
  BookOpen,
  User,
  Clock,
  Mail,
  FileText,
  Sun,
  Moon,
  Sparkles,
  X,
  ExternalLink
} from 'lucide-react';
import { getInitialTheme, applyTheme } from '@/lib/theme';

export interface CommandItem {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  action: () => void;
  keywords?: string[];
}

export const CommandPalette: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  const commands: CommandItem[] = [
    {
      id: 'work',
      title: 'Work Experience (M2P, Thales, Makers Lab)',
      category: 'Navigation',
      icon: <Briefcase size={16} />,
      action: () => { router.push('/#work'); onClose(); },
      keywords: ['experience', 'jobs', 'career', 'm2p', 'thales']
    },
    {
      id: 'intersection',
      title: 'The Intersection (Interactive System Map)',
      category: 'Exploration',
      icon: <Layers size={16} />,
      action: () => { router.push('/#intersection'); onClose(); },
      keywords: ['systems', 'map', 'interdisciplinary', 'architecture']
    },
    {
      id: 'projects',
      title: 'Projects & Case Studies',
      category: 'Navigation',
      icon: <Layers size={16} />,
      action: () => { router.push('/#projects'); onClose(); },
      keywords: ['case study', 'portfolio', 'pixel streaming', 'lit parking']
    },
    {
      id: 'research',
      title: 'Research Blueprint (IEEE Publication & Quantum)',
      category: 'Research',
      icon: <BookOpen size={16} />,
      action: () => { router.push('/research'); onClose(); },
      keywords: ['ieee', 'paper', 'quantum', 'signal processing', 'awards']
    },
    {
      id: 'lab',
      title: 'Lab (Living Experimental Archive)',
      category: 'Exploration',
      icon: <FlaskConical size={16} />,
      action: () => { router.push('/lab'); onClose(); },
      keywords: ['experiments', 'prototypes', 'ideas', 'sandbox']
    },
    {
      id: 'now',
      title: 'Now (Current Chapter & Active Focus)',
      category: 'Profile',
      icon: <Clock size={16} />,
      action: () => { router.push('/now'); onClose(); },
      keywords: ['current', 'status', 'reading', 'learning']
    },
    {
      id: 'about',
      title: 'About & Human Side (Beyond the Resume)',
      category: 'Profile',
      icon: <User size={16} />,
      action: () => { router.push('/#about'); onClose(); },
      keywords: ['art', 'watercolor', 'music', 'interests', 'philosophy']
    },
    {
      id: 'contact',
      title: 'Contact & Connect with Ayush',
      category: 'Connect',
      icon: <Mail size={16} />,
      action: () => { router.push('/#connect'); onClose(); },
      keywords: ['email', 'linkedin', 'phone', 'message']
    },
    {
      id: 'toggle-theme',
      title: 'Toggle Theme (Dark / Light Mode)',
      category: 'Preferences',
      icon: <Sun size={16} />,
      action: () => {
        const current = getInitialTheme();
        const next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        onClose();
      },
      keywords: ['theme', 'dark mode', 'light mode', 'switch']
    },
    {
      id: 'linkedin',
      title: 'Open LinkedIn Profile',
      category: 'External',
      icon: <ExternalLink size={16} />,
      action: () => { window.open('https://linkedin.com/in/ayush-kumar-sharan', '_blank'); onClose(); },
      keywords: ['social', 'network', 'profile']
    }
  ];

  const filtered = commands.filter((cmd) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      cmd.title.toLowerCase().includes(q) ||
      cmd.category.toLowerCase().includes(q) ||
      cmd.keywords?.some((k) => k.includes(q))
    );
  });

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
      } else if (e.key === 'Enter' && filtered[selectedIndex]) {
        e.preventDefault();
        filtered[selectedIndex].action();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(10px)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '12vh 1rem 1rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '600px',
          backgroundColor: 'var(--bg-surface-elevated)',
          border: '1px solid var(--border-medium)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-lg)',
          overflow: 'hidden',
          animation: 'fadeInUp 0.15s ease-out',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Box */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '1rem 1.25rem',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          <Search size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
          <input
            type="text"
            placeholder="Type a command or search (e.g. work, research, theme)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              width: '100%',
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--text-primary)',
              fontSize: '0.95rem',
              fontFamily: 'var(--font-body)',
            }}
          />
          <button
            onClick={onClose}
            style={{
              display: 'flex',
              padding: '0.25rem',
              color: 'var(--text-tertiary)',
              cursor: 'pointer',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Command List */}
        <div style={{ maxHeight: '360px', overflowY: 'auto', padding: '0.5rem' }}>
          {filtered.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>
              No matching commands found.
            </div>
          ) : (
            filtered.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: isSelected ? 'var(--accent-subtle)' : 'transparent',
                    border: isSelected ? '1px solid var(--accent-border)' : '1px solid transparent',
                    cursor: 'pointer',
                    transition: 'all 0.1s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ color: isSelected ? 'var(--accent-primary)' : 'var(--text-secondary)' }}>
                      {item.icon}
                    </span>
                    <span
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                      }}
                    >
                      {item.title}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: '0.725rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {item.category}
                  </span>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.625rem 1.25rem',
            backgroundColor: 'var(--bg-surface)',
            borderTop: '1px solid var(--border-subtle)',
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-muted)',
          }}
        >
          <span>Use ↑↓ to navigate</span>
          <span>Press [Enter] to select • [ESC] to close</span>
        </div>
      </div>
    </div>
  );
};
