import EventRentalForm from './EventRentalForm';

const EventRentalFormStory = {
  component: EventRentalForm,
  title: 'Forms/EventRentalForm',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default EventRentalFormStory;

export const Default = {
  args: {},
};
