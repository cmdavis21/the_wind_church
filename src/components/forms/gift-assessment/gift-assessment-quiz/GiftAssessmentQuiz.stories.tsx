import { GiftAssessmentDefinition, GiftAssessmentQuestion } from '@/data/types';

import GiftAssessmentQuiz from './GiftAssessmentQuiz';

const GiftAssessmentQuizStory = {
  component: GiftAssessmentQuiz,
  title: 'Forms/GiftAssessment/GiftAssessmentQuiz',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default GiftAssessmentQuizStory;

export const Default = {
  args: {
    questions: [
      {
        id: 1,
        question:
          'I have a desire to speak direct messages from God that edify, exhort, or comfort others.',
        gift: 'Prophecy',
      },
      {
        id: 2,
        question:
          'I have enjoyed relating to a certain group of people over a long period of time, sharing personally in their successes and failures.',
        gift: 'Pastor',
      },
      {
        id: 3,
        question:
          'People have told me that I have helped them learn some biblical truth in a meaningful way.',
        gift: 'Teaching',
      },
      {
        id: 4,
        question:
          'I have applied spiritual truth effectively to situations in my own life.',
        gift: 'Wisdom',
      },
      {
        id: 5,
        question:
          'Others have told me that I have helped them distinguish key and important facts of scripture.',
        gift: 'Knowledge',
      },
    ],
    definitions: [
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
      {
        gift: 'Teaching',
        definition:
          'The gift of teaching is the special ability that God gives to certain members of the body of Christ to communicate information relevant to the health and ministry of the body and its members in such a way that others will learn.',
        scriptures: [
          '1 Cor. 12:28',
          'Eph. 4:11 - 14',
          'Romans 12:7',
          'Acts 18:24 - 28',
          'Acts 12:20 - 21',
        ],
      },
      {
        gift: 'Wisdom',
        definition:
          'The gift of wisdom is the special ability that God gives to certain members of the body of Christ to know the mind of the Holy Spirit in such a way as to receive insight into how given knowledge may best be applied to specific needs arising in the body of Christ. Some groups refer to a “Word of Wisdom”, this idea is about a prophetic insight that can only come through God. This may relate more to gifts of Prophecy, or leadership.',
        scriptures: [
          '1 Cor. 2:1 - 13',
          '1 Cor. 12:8',
          'Acts 6:3,10',
          'James 1:5 - 6',
          '2 Peter 3:15,16',
        ],
      },
      {
        gift: 'Knowledge',
        definition:
          'The gift of knowledge is the special ability that God gives to certain members of the body of Christ to discover, accumulate, analyze, and clarify information and ideas which are pertinent to the well being of the body. Some groups refer to a “Word of Knowledge”, this idea is about Spiritual Gifts Test 14 a prophetic knowledge, or information given that can only come from God. See Prophecy for more information on this idea.',
        scriptures: [
          '1 Cor. 2:14',
          '1 Cor. 12:8',
          'Acts 5:1 - 11',
          'Col. 2:2 - 3',
          '2 Cor. 11:6',
        ],
      },
    ],
    dominateGifts: (val: GiftAssessmentQuestion[]) => console.log(val),
    subordinateGifts: (val: GiftAssessmentDefinition[]) => console.log(val),
    dominateGiftNamesList: (str: string) => console.log(str),
    subordinateGiftNamesList: (str: string) => console.log(str),
    showQuizResults: () => alert('Show Quiz Results'),
    disable: false,
  },
};
