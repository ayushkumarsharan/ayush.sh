import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'surface' | 'elevated' | 'subtle' | 'borderless';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverEffect?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  variant = 'surface',
  padding = 'md',
  hoverEffect = true,
  children,
  className = '',
  style,
  ...props
}) => {
  const getStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-subtle)',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all var(--transition-normal)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      ...style,
    };

    // Padding
    if (padding === 'none') {
      base.padding = 0;
    } else if (padding === 'sm') {
      base.padding = 'var(--space-4)';
    } else if (padding === 'lg') {
      base.padding = 'var(--space-8)';
    } else {
      base.padding = 'var(--space-6)';
    }

    // Variant
    if (variant === 'elevated') {
      base.backgroundColor = 'var(--bg-surface-elevated)';
      base.boxShadow = 'var(--shadow-md)';
      base.borderColor = 'var(--border-medium)';
    } else if (variant === 'subtle') {
      base.backgroundColor = 'var(--bg-surface-subtle)';
      base.borderColor = 'transparent';
    } else if (variant === 'borderless') {
      base.backgroundColor = 'transparent';
      base.borderColor = 'transparent';
    } else {
      base.backgroundColor = 'var(--bg-surface)';
      base.boxShadow = 'var(--shadow-sm)';
    }

    return base;
  };

  return (
    <div
      style={getStyles()}
      className={`card-component ${hoverEffect ? 'card-hover-active' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
