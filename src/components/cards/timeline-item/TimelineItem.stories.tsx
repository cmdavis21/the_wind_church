import TimelineItem from './TimelineItem';

const TimelineItemStory = {
  component: TimelineItem,
  title: 'Cards/TimelineItem',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default TimelineItemStory;

export const Default = {
  args: {
    vertical: false,
    event: {
      name: 'Lorem Ipsum Dolor',
      date: '01/05/2025',
      time: '07:00PM',
      categories: ['Everyone Welcome', 'Fellowhsip', 'Discipleship'],
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, corrupti, incidunt, culpa est tempore eaque facilis unde qui obcaecati laudantium autem quam cumque odit aperiam amet possimus doloremque repellat officiis?',
      location: 'Lorem Ipsum',
      hostedBy: 'Outreach Ministry',
      howToSignup: 'Signup sheet in office',
      helpNeeded: ['Setup', 'Breakdown', 'Servers'],
      image: {
        src: '/images/misc/logo_placeholder.png',
        alt: 'alt',
      },
    },
  },
};
