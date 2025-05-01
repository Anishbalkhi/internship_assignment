import { useState } from 'react';
import { Button } from './components/Button/Button';
import { Accordion } from './components/Accordion/Accordion';
import { Navbar } from './components/Navbar/Navbar';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Tag } from './components/Tag/Tag';
import { Tabs } from './components/Tabs/Tabs';

const App = () => {
  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white transition-colors duration-300">
      {/* Navbar with sidebar toggle */}
      <Navbar showSidebar={showSidebar} toggleSidebar={() => setShowSidebar(prev => !prev)} />

      <div className="flex">
        {/* Sidebar */}
        {showSidebar && <Sidebar />}

        {/* Main Content */}
        <main className="flex-1 px-8 py-6 space-y-8">
          <h1 className="text-3xl font-bold tracking-tight">🎨 Design System Components Demo</h1>

          {/* Buttons */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Buttons</h2>
            <div className="flex gap-4 flex-wrap">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="primary" disabled>Disabled</Button>
            </div>
          </section>

          {/* Accordion */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Accordion</h2>
            <Accordion
              title="Sample Accordion"
              isOpen={isAccordionOpen}
              onToggle={() => setAccordionOpen(!isAccordionOpen)}
            >
              <p>This is some accordion content that can be expanded or collapsed.</p>
            </Accordion>
          </section>

          {/* Tags */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Tags</h2>
            <div className="flex gap-2">
              <Tag color="primary" label="Primary" />
              <Tag color="success" label="Success" />
              <Tag color="error" label="Error" />
            </div>
          </section>

          {/* Tabs */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Tabs</h2>
            <Tabs
              tabs={[
                { id: 'tab1', label: 'Tab One', content: 'Content for Tab One' },
                { id: 'tab2', label: 'Tab Two', content: 'Content for Tab Two' },
              ]}
            />
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
