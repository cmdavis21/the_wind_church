import GalleryMasonryGrid from './GalleryMasonryGrid';

const GalleryMasonryGridStory = {
  component: GalleryMasonryGrid,
  title: 'MasonryGrids/GalleryMasonryGrid',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default GalleryMasonryGridStory;

export const Default = {
  args: {
    images: [
      '/placeholder-media/church_prayer.jpg',
      '/placeholder-media/couple_credit_card.jpg',
      '/placeholder-media/lxg_meet.webp',
      '/placeholder-media/contro.webp',
      '/placeholder-media/family.jpeg',
      '/placeholder-media/outreach.png',
      '/placeholder-media/pastor_preaching.jpg',
    ],
  },
};
