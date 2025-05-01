import React, { useState } from 'react';
import { TabsProps } from './Tabs.types';

export const Tabs: React.FC<TabsProps> = ({ tabs, defaultIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex space-x-2 bg-neutral-200 dark:bg-neutral-700 p-1 rounded-xl shadow-inner">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            onClick={() => setActiveIndex(idx)}
            className={`flex-1 py-2 px-4 text-sm font-medium rounded-lg transition-all duration-200
              ${idx === activeIndex
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-transparent text-neutral-600 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4 p-4 border rounded-xl bg-white dark:bg-neutral-800 shadow transition-all duration-300">
        {tabs[activeIndex].content}
      </div>
    </div>
  );
};
