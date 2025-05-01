import React from 'react';

interface TagProps {
  label: string;
  color?: 'primary' | 'success' | 'warning' | 'error' | 'neutral';
}

export const Tag: React.FC<TagProps> = ({ label, color = 'neutral' }) => {
  const colorMap: Record<string, string> = {
    primary: 'bg-primary text-white',
    success: 'bg-success text-white',
    warning: 'bg-warning text-white',
    error: 'bg-error text-white',
    neutral: 'bg-neutral-500 text-white',
  };

  return (
    <span className={`px-3 py-1 text-sm rounded-full font-medium ${colorMap[color]}`}>
      {label}
    </span>
  );
};
