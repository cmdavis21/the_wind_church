import DarkThemeToggler from './DarkThemeToggler';

const DarkThemeTogglerStory = {
  component: DarkThemeToggler,
  title: 'ThemeMode/DarkThemeToggler',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default DarkThemeTogglerStory;

export const Default = {
  args: {},
};
