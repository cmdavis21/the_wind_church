import MinistryCard from './MinistryCard';

const MinistryCardStory = {
  component: MinistryCard,
  title: 'Cards/MinistryCard',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default MinistryCardStory;

export const Default = {
  args: {
    name: 'Kingdom Outreach Initiative',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, aliquid in. Ut eveniet repellat distinctio error vel quo voluptas dolorem, perspiciatis blanditiis hic amet, temporibus accusantium reiciendis, libero quidem necessitatibus.',
    slug: 'slug',
    image: {
      src: '/placeholder-media/church_prayer.jpg',
      alt: 'alt',
    },
    flip: false,
  },
};
