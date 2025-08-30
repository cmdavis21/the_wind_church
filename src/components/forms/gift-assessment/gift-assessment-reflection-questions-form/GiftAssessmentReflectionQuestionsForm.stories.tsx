import GiftAssessmentReflectionQuestionsForm from './GiftAssessmentReflectionQuestionsForm';

const GiftAssessmentReflectionQuestionsFormStory = {
  component: GiftAssessmentReflectionQuestionsForm,
  title: 'Forms/GiftAssessment/GiftAssessmentReflectionQuestionsForm',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default GiftAssessmentReflectionQuestionsFormStory;

export const Default = {
  args: {
    responses: (data: {
      ministriesInvolvedIn: string;
      changeInMinistry: string;
      layOrClergy: string;
    }) => console.log(data),
    disable: false,
  },
};
