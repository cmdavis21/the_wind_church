import SectionHeader from './SectionHeader';

const SectionHeaderStory = {
  component: SectionHeader,
  title: 'Sections/SectionHeader',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default SectionHeaderStory;

export const Default = {
  args: {
    title: 'Main Section Tile Here',
    subtitle: 'Additional subtext information here',
  },
};
