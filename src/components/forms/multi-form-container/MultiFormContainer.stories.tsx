import FeedbackForm from '../feedback-form/FeedbackForm';
import PlanYourVisitForm from '../plan-your-visit-form/PlanYourVisitForm';
import MultiFormContainer from './MultiFormContainer';

const MultiFormContainerStory = {
  component: MultiFormContainer,
  title: 'Forms/MultiFormContainer',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default MultiFormContainerStory;

export const Default = {
  args: {
    forms: [
      {
        buttonLabel: 'Plan Your Visit',
        header: {
          title: 'Let us know your coming!',
          description:
            'Tell us about your visit at the Wind. Your feedback can help us improve our services within our community.',
        },
        form: <PlanYourVisitForm />,
      },
      {
        buttonLabel: 'Leave Your Feedback',
        header: {
          title: 'Already visited the wind?',
          description:
            'Tell us about your visit at the Wind. Your feedback can help us improve our services within our community.',
        },
        form: <FeedbackForm />,
      },
    ],
  },
};
