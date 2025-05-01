import React from 'react';
import { ButtonProps } from './Button.types';
import { classNames } from '../../utils/classNames';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  ...rest
}) => {
  const baseStyles = 'rounded font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles: Record<string, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-black hover:bg-gray-300 focus:ring-gray-500',
  };

  const sizeStyles: Record<string, string> = {
    sm: 'text-sm py-1 px-3',
    md: 'text-md py-2 px-4',
    lg: 'text-lg py-3 px-6',
  };

  return (
    <button
      className={classNames(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        disabled && 'opacity-50 cursor-not-allowed'
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
