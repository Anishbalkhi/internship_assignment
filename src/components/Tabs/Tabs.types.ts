export interface Tab {
  id: string;              // ✅ Add this line
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  defaultIndex?: number;
}
