import PageHeader from './PageHeader';

const PageHeaderStory = {
  component: PageHeader,
  title: 'Heroes/PageHeader',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default PageHeaderStory;

export const Default = {
  args: {
    title: 'Page Headline',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis delectus impedit dolorum!',
  },
};
