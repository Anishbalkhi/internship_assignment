// Tabs.stories.tsx
import { Tabs } from './Tabs'; // ✅ Correct named import
import { TabsProps } from './Tabs.types';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as Meta;

const Template: Story<TabsProps> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { id: 'tab1', label: 'Tab 1', content: 'Content for Tab 1' },
    { id: 'tab2', label: 'Tab 2', content: 'Content for Tab 2' },
    { id: 'tab3', label: 'Tab 3', content: 'Content for Tab 3' },
  ],
};
