import MobileNavMenuButton from './MobileNavMenuButton';

const MobileNavMenuButtonStory = {
  component: MobileNavMenuButton,
  title: 'Buttons/MobileNavMenuButton',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default MobileNavMenuButtonStory;

export const Default = {
  args: {
    navState: false,
    handleChange: () => alert('Clicked'),
    changeColor: false,
  },
};
