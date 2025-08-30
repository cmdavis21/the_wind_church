import PlanYourVisitForm from './PlanYourVisitForm';

const PlanYourVisitFormStory = {
  component: PlanYourVisitForm,
  title: 'Forms/PlanYourVisitForm',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default PlanYourVisitFormStory;

export const Default = {
  args: {},
};
