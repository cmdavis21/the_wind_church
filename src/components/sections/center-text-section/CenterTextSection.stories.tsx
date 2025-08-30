import CenterTextSection from './CenterTextSection';

const CenterTextSectionStory = {
  component: CenterTextSection,
  title: 'sections/CenterTextSection',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default CenterTextSectionStory;

export const Default = {
  args: {
    title: "We're a family going through life together",
    description:
      "We love to celebrate the Lord's blessings and support each other through difficult times. We're here for one another and for you.",
  },
};

export const WithHighlight = {
  args: {
    title: "We're a family going through life together",
    description:
      "We love to celebrate the Lord's blessings and support each other through difficult times. We're here for one another and for you.",
    highlight: [[2, 2]],
  },
};
