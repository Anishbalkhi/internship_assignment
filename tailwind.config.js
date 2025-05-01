/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // 👈 This is important
    "./.storybook/**/*.{js,ts,jsx,tsx,mdx}", // 👈 for Storybook docs
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',  // Primary Blue
        secondary: '#4B5563', // Secondary Gray
        success: '#10B981',   // Success Green
        warning: '#F59E0B',   // Warning Yellow
        error: '#EF4444',     // Error Red
        neutral: {
          100: '#F3F4F6',    // Background light gray
          500: '#6B7280',     // Neutral text gray
        },
      },
    },
  },
  darkMode: 'class',  // Correct placement of darkMode configuration
  plugins: [],
}
