// ProgressBar.stories.tsx

import ProgressBar from './ProgressBar';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
};

export const Default = () => <ProgressBar progress={50} label="50% Completed" />;

export const Success = () => <ProgressBar progress={75} color="success" label="75% Success" />;
