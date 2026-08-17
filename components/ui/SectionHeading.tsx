import React from 'react';

interface SectionHeadingProps {
  number?: string;
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  label,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  return (
    <div
      style={{
        textAlign: align,
        marginBottom: 'var(--space-12)',
        maxWidth: align === 'center' ? '760px' : '820px',
        marginLeft: align === 'center' ? 'auto' : undefined,
        marginRight: align === 'center' ? 'auto' : undefined,
      }}
      className={className}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          justifyContent: align === 'center' ? 'center' : 'flex-start',
          marginBottom: 'var(--space-3)',
        }}
      >
        {number && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--accent-primary)',
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}
          >
            {number}
          </span>
        )}
        {number && <span style={{ color: 'var(--border-strong)', fontSize: '0.8rem' }}>/</span>}
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.775rem',
            color: 'var(--text-tertiary)',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            fontWeight: 500,
          }}
        >
          {label}
        </span>
      </div>

      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 3.8vw, 3rem)',
          lineHeight: 1.15,
          color: 'var(--text-primary)',
          marginBottom: subtitle ? 'var(--space-4)' : 0,
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          style={{
            fontSize: 'clamp(1rem, 1.2vw, 1.125rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginTop: 'var(--space-2)',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
