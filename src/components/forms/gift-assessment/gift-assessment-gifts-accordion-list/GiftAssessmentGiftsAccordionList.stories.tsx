import GiftAssessmentGiftsAccordionList from './GiftAssessmentGiftsAccordionList';

const GiftAssessmentGiftsAccordionListStory = {
  component: GiftAssessmentGiftsAccordionList,
  title: 'Forms/GiftAssessment/GiftAssessmentGiftsAccordionList',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default GiftAssessmentGiftsAccordionListStory;

export const Default = {
  args: {
    list: [
      {
        title: 'Your 1 Dominate Gifts',
        gifts: [
          {
            gift: 'Prophecy',
            definition:
              'The gift of prophecy is the special ability that God gives to certain members of the body of Christ to receive and communicate an immediate message of God to His people through a divinely-anointed utterance.',
            scriptures: [
              'Luke 7:26',
              'Acts 15:32',
              'Acts 21:9 - 11',
              'Romans 12:6',
              '1 Cor. 12:10,28',
              'Eph. 4:11 - 14',
            ],
          },
        ],
      },
      {
        title: 'Your 1 Subordinate Gifts',
        gifts: [
          {
            gift: 'Pastor',
            definition:
              'The gift of the pastor is the special ability that God gives to certain members of the body of Christ to assume long-term personal responsibility for the spiritual welfare of a group of believers.',
            scriptures: [
              'Eph. 4:11 - 14',
              '1 Timothy 3:1 - 7',
              'John 10:1 - 18',
              '1 Peter 5:1 - 3',
            ],
          },
        ],
      },
    ],
  },
};
