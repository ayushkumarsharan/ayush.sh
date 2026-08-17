import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'warm' | 'subtle' | 'outline';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  icon,
  className = '',
}) => {
  const getStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.375rem',
      borderRadius: 'var(--radius-full)',
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      transition: 'all var(--transition-fast)',
      border: '1px solid transparent',
    };

    if (size === 'sm') {
      base.padding = '0.25rem 0.625rem';
      base.fontSize = '0.725rem';
    } else {
      base.padding = '0.35rem 0.8rem';
      base.fontSize = '0.8rem';
    }

    if (variant === 'accent') {
      base.backgroundColor = 'var(--accent-subtle)';
      base.color = 'var(--accent-primary)';
      base.borderColor = 'var(--accent-border)';
    } else if (variant === 'warm') {
      base.backgroundColor = 'var(--accent-warm-subtle)';
      base.color = 'var(--accent-warm)';
      base.borderColor = 'rgba(245, 158, 11, 0.3)';
    } else if (variant === 'subtle') {
      base.backgroundColor = 'var(--bg-surface-elevated)';
      base.color = 'var(--text-secondary)';
      base.borderColor = 'var(--border-subtle)';
    } else if (variant === 'outline') {
      base.backgroundColor = 'transparent';
      base.color = 'var(--text-secondary)';
      base.borderColor = 'var(--border-medium)';
    } else {
      base.backgroundColor = 'var(--bg-surface-subtle)';
      base.color = 'var(--text-primary)';
      base.borderColor = 'var(--border-medium)';
    }

    return base;
  };

  return (
    <span style={getStyles()} className={className}>
      {icon && <span style={{ display: 'inline-flex' }}>{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
