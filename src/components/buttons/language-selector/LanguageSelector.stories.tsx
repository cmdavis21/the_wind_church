import LanguageSelector from './LanguageSelector';

const LanguageSelectorStory = {
  component: LanguageSelector,
  title: 'Buttons/LanguageSelector',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default LanguageSelectorStory;

export const Default = {
  args: {
    changeColor: true,
  },
};
