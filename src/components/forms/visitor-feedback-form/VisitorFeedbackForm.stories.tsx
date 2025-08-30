import VisitorFeedbackForm from "./VisitorFeedbackForm";

const VisitorFeedbackFormStory = {
  component: VisitorFeedbackForm,
  title: "Forms/VisitorFeedbackForm",
  tags: ["autodocs"],
  decorators: (Story: React.FC) => <Story />,
};

export default VisitorFeedbackFormStory;

export const Default = {
  args: {},
};
