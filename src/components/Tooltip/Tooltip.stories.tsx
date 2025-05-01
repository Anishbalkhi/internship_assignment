// Tooltip.stories.tsx
import React from 'react';
import Tooltip from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
};

export const Default = () => (
  <Tooltip message="This is a tooltip" position="top">
    <button className="bg-primary text-white py-2 px-4 rounded">Hover me</button>
  </Tooltip>
);

export const WithSize = () => (
  <Tooltip message="This is a large tooltip" position="bottom" size="lg">
    <button className="bg-primary text-white py-2 px-4 rounded">Hover me</button>
  </Tooltip>
);
