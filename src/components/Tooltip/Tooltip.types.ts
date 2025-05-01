// Tooltip.types.ts
export interface TooltipProps {
    message: string;  // Tooltip text to display
    position?: 'top' | 'right' | 'bottom' | 'left';  // Position of the tooltip
    children: React.ReactNode;  // The element that triggers the tooltip on hover/focus
    size?: 'sm' | 'md' | 'lg';  // Tooltip size (optional)
    disabled?: boolean;  // Optional, disable the tooltip
  }
  