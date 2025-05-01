// ProgressBar.tsx
import React from 'react';
import { ProgressBarProps } from './ProgressBar.types';

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  color = 'primary',
  size = 'md',
  label,
  ariaLabel,
}) => {
  const colorClasses = {
    primary: 'bg-blue-600',
    success: 'bg-green-600',
    error: 'bg-red-600',
  };

  const sizeClasses = {
    sm: 'h-2',
    md: 'h-4',
    lg: 'h-6',
  };

  return (
    <div aria-label={ariaLabel} className="w-full">
      {label && <div className="mb-2 text-sm">{label}</div>}
      <div className="relative pt-1">
        <div className={`flex mb-2 items-center justify-between`}>
          <div className={`w-full bg-gray-200 rounded-full`}>
            <div
              className={`h-${sizeClasses[size]} bg-${colorClasses[color]} rounded-full`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
