import UserSettings from './UserSettings';

const UserSettingsStory = {
  component: UserSettings,
  title: 'Navigation/Navbar/DesktopNav/UserSettings',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default UserSettingsStory;

export const Default = {
  args: {
    changeColor: true,
  },
};
