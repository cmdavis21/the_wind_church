import React from 'react';

import DesktopNavItem from './DesktopNavItem';

const DesktopNavItemStory = {
  component: DesktopNavItem,
  title: 'Navigation/Navbar/DesktopNav/DesktopNavItem',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default DesktopNavItemStory;

export const Default = {
  args: {
    label: 'About',
    active: false,
    link: 'test-link',
    colorChange: false,
  },
};
