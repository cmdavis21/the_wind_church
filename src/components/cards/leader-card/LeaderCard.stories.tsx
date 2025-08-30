import LeaderCard from './LeaderCard';

const LeaderCardStory = {
  component: LeaderCard,
  title: 'Cards/LeaderCard',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default LeaderCardStory;

export const Default = {
  args: {
    name: 'Jane Austen',
    position: 'Hebrews Cafe Lead',
    description:
      'As the Lead Café Manager at Hebrew Café, I blend my love for creating a warm, welcoming environment and fostering a vibrant community atmosphere within the Café. Under my leadership, Hebrew Café has become a beloved local spot, celebrated for its delicious food, cozy ambiance, and engaging cultural events. My dedication to excellence and personal touch in everything I do are what make the Hebrew Café experience truly special.',
    media: {
      poster: '/placeholder-media/profile_1_poster.png',
      src: '/placeholder-media/profile_1_video.mp4',
    },
  },
};
