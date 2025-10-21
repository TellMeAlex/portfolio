import React from 'react';
import type { ButtonProps } from './Button.types';
import './Button.css';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  ariaLabel,
  icon = false,
}) => {
  const buttonClasses = [
    'btn',
    `btn--${variant}`,
    size !== 'medium' && `btn--${size}`,
    icon && 'btn--icon',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
