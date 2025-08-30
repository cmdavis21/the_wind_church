import PassageQuote from './PassageQuote';

const PassageQuoteStory = {
  component: PassageQuote,
  title: 'Sections/PassageQuote',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default PassageQuoteStory;

export const Default = {
  args: {
    passage:
      'So Christ himself gave the apostles, the prophets, the evangelists, the pastors and teachers, to equip his people for works of service, so that the body of Christ may be built up.',
    verse: 'Ephesians 4:11-12',
  },
};
