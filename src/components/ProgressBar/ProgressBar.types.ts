// ProgressBar.types.ts
export interface ProgressBarProps {
    progress: number;  // Progress percentage (0-100)
    color?: 'primary' | 'success' | 'error';  // Color variant
    size?: 'sm' | 'md' | 'lg';  // Size of the progress bar
    label?: string;  // Optional label above the bar
    ariaLabel?: string;  // ARIA label for accessibility
  }
  