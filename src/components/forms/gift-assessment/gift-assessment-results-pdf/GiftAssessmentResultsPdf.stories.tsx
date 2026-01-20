import { GiftAssessmentDefinitions } from '@/data/gift-assessment';

import GiftAssessmentResultsPdf from './GiftAssessmentResultsPdf';

const GiftAssessmentResultsPdfStory = {
  component: GiftAssessmentResultsPdf,
  title: 'pdfs/GiftAssessmentResultsPdf',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default GiftAssessmentResultsPdfStory;

export const Default = {
  args: {
    dominateGifts: GiftAssessmentDefinitions.slice(0, 3),
    subordinateGifts: GiftAssessmentDefinitions.slice(4, 6),
    ministriesInvolvedInAnswer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda minima, minus alias, quam ut dolore nobis nesciunt illo fugit aliquid fuga libero natus explicabo qui quisquam iste consequatur! Quibusdam, distinctio.',
    changeInMinistryAnswer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda minima, minus alias, quam ut dolore nobis nesciunt illo fugit aliquid fuga libero natus explicabo qui quisquam iste consequatur! Quibusdam, distinctio.',
    layOrClergyAnswer: 'Clergy',
  },
};
