import EventCard from './EventCard';

const EventCardStory = {
  component: EventCard,
  title: 'Cards/EventCard',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default EventCardStory;

export const Default = {
  args: {
    scale: true,
    event: {
      name: 'Lorem Ipsum Dolor',
      dateTime: '01/05/2025',
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
