import React, { useState } from 'react';

export const Accordion: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  
  return (
    <div className="w-full max-w-md mx-auto mt-6">
    
      {/* Accordion */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="accordion-content"
          id="accordion-header"
          className="w-full text-left p-4 rounded-t-lg bg-blue-500 dark:bg-blue-700 text-white hover:bg-blue-600 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Toggle Accordion
        </button>

        <div
          id="accordion-content"
          role="region"
          aria-labelledby="accordion-header"
          hidden={!isOpen}
          className="p-4 bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
        >
          This is the hidden content that gets revealed.
        </div>
      </div>
    </div>
  );
};
