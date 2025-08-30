import Navbar from './Navbar';

const NavbarStory = {
  component: Navbar,
  title: 'Navigation/Navbar',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default NavbarStory;

export const Default = {
  args: {},
};
