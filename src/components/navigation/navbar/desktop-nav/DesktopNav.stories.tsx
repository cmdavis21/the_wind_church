import DesktopNav from './DesktopNav';

const DesktopNavStory = {
  component: DesktopNav,
  title: 'Navigation/Navbar/DesktopNav',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default DesktopNavStory;

export const Default = {
  args: {},
};
