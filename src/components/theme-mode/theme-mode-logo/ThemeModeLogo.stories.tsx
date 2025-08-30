import ThemeModeLogo from './ThemeModeLogo';

const ThemeModeLogoStory = {
  component: ThemeModeLogo,
  title: 'ThemeMode/ThemeModeLogo',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default ThemeModeLogoStory;

export const Default = {
  args: {
    changeColor: true,
    noChangeColor: false,
    className: '',
  },
};
