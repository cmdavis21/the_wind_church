import GiftAssessment from './GiftAssessment';

const GiftAssessmentStory = {
  component: GiftAssessment,
  title: 'Forms/GiftAssessment/GiftAssessment',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default GiftAssessmentStory;

export const Default = {
  args: {},
};
