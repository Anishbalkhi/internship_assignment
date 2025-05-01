import React from 'react';

export const Sidebar: React.FC = () => {
  const links = [
    { label: 'Dashboard', href: '#' },
    { label: 'Reports', href: '#' },
    { label: 'Settings', href: '#' },
  ];

  return (
    <div className="w-64 min-h-screen bg-gray-800 text-white p-4">
      <h2 className="text-lg font-bold mb-4">Navigation</h2>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="block py-2 px-3 rounded hover:bg-gray-700 transition"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
