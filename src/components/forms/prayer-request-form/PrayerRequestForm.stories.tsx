import PrayerRequestForm from './PrayerRequestForm';

const PrayerRequestFormStory = {
  component: PrayerRequestForm,
  title: 'Forms/PrayerRequestForm',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default PrayerRequestFormStory;

export const Default = {
  args: {},
};
