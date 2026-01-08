import ScriptureList from './ScriptureList';

const ScriptureListStory = {
  component: ScriptureList,
  title: 'Sections/ScriptureList',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default ScriptureListStory;

export const Default = {
  args: {
    scriptures: ['John 3:16', '1 Corinthians 2:12', 'Deuteronomy 8:17-18', 'James 1:17'],
  },
};
