import MediaBackgroundAndContent from './MediaBackgroundAndContent';

const MediaBackgroundAndContentStory = {
  component: MediaBackgroundAndContent,
  title: 'Sections/MediaBackgroundAndContent',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default MediaBackgroundAndContentStory;

export const Default = {
  args: {
    rounded: true,
    background: {
      src: '/placeholder-media/plan-your-visit-video.mp4',
      poster: '/placeholder-media/plan-your-visit-poster.png',
    },
    content: (
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi non beatae
        incidunt amet ducimus iusto! Vero dolores amet aut qui cumque eius
        reprehenderit, impedit voluptatibus, veritatis blanditiis magni quod
        harum!
      </h3>
    ),
  },
};
