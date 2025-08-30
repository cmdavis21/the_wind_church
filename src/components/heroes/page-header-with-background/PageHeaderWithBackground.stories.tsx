import PageHeaderWithBackground from './PageHeaderWithBackground';

const PageHeaderWithBackgroundStory = {
  component: PageHeaderWithBackground,
  title: 'Heroes/PageHeaderWithBackground',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default PageHeaderWithBackgroundStory;

export const Default = {
  args: {
    short: false,
    media: {
      src: '/images/misc/logo_placeholder.png',
      alt: 'decorative background image',
      poster: '',
    },
    title: 'Page Headline',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis delectus impedit dolorum!',
  },
};
