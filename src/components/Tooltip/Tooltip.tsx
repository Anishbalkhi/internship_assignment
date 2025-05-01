// Tooltip.tsx
import React, { useState } from 'react';
import { TooltipProps } from './Tooltip.types';

const Tooltip: React.FC<TooltipProps> = ({
  message,
  position = 'top',
  children,
  size = 'md',
  disabled = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  if (disabled) return <>{children}</>;

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  const positionClasses = {
    top: 'bottom-full mb-2',
    right: 'left-full ml-2',
    bottom: 'top-full mt-2',
    left: 'right-full mr-2',
  };

  const sizeClasses = {
    sm: 'text-xs py-1 px-2',
    md: 'text-sm py-1.5 px-3',
    lg: 'text-lg py-2 px-4',
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        aria-describedby="tooltip"
      >
        {children}
      </div>
      {isVisible && (
        <div
          className={`absolute ${positionClasses[position]} bg-black text-white rounded ${sizeClasses[size]} p-2 shadow-lg`}
          role="tooltip"
          id="tooltip"
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
