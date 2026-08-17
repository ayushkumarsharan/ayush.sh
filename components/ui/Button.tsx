import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  external,
  icon,
  iconPosition = 'left',
  children,
  className = '',
  ...props
}) => {
  const getStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      fontWeight: 500,
      fontFamily: 'var(--font-body)',
      borderRadius: 'var(--radius-md)',
      transition: 'all var(--transition-fast)',
      textDecoration: 'none',
      cursor: 'pointer',
      border: '1px solid transparent',
      lineHeight: 1,
      whiteSpace: 'nowrap',
    };

    // Size styles
    if (size === 'sm') {
      base.padding = '0.5rem 0.875rem';
      base.fontSize = '0.85rem';
    } else if (size === 'lg') {
      base.padding = '0.875rem 1.75rem';
      base.fontSize = '1.05rem';
    } else {
      base.padding = '0.675rem 1.25rem';
      base.fontSize = '0.925rem';
    }

    // Variant styles
    if (variant === 'primary') {
      base.backgroundColor = 'var(--accent-primary)';
      base.color = '#ffffff';
      base.borderColor = 'transparent';
      base.boxShadow = 'var(--shadow-sm)';
    } else if (variant === 'secondary') {
      base.backgroundColor = 'var(--bg-surface-elevated)';
      base.color = 'var(--text-primary)';
      base.borderColor = 'var(--border-medium)';
    } else if (variant === 'outline') {
      base.backgroundColor = 'transparent';
      base.color = 'var(--text-primary)';
      base.borderColor = 'var(--border-strong)';
    } else if (variant === 'ghost') {
      base.backgroundColor = 'transparent';
      base.color = 'var(--text-secondary)';
      base.borderColor = 'transparent';
    }

    return base;
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span style={{ display: 'inline-flex' }}>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span style={{ display: 'inline-flex' }}>{icon}</span>}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={getStyles()}
          className={`btn-hover-effect ${className}`}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} style={getStyles()} className={`btn-hover-effect ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button style={getStyles()} className={`btn-hover-effect ${className}`} {...props}>
      {content}
    </button>
  );
};
