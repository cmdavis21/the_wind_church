import FooterColumn from './FooterColumn';

const FooterColumnStory = {
  component: FooterColumn,
  title: 'Navigation/Footer/FooterColumn',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default FooterColumnStory;

export const Default = {
  args: {
    label: 'About',
    row: [
      {
        label: 'Courses',
        link: '#',
      },
      {
        label: 'Leaders',
        link: '#',
      },
      {
        label: 'Gallery',
      },
      {
        label: 'Bookstore',
        link: '#',
      },
      {
        label: 'Cafe',
      },
    ],
  },
};
