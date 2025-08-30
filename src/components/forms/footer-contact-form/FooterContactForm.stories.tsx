import FooterContactForm from "./FooterContactForm";

const FooterContactFormStory = {
  component: FooterContactForm,
  title: "Forms/FooterContactForm",
  tags: ["autodocs"],
  decorators: (Story: React.FC) => <Story />,
};

export default FooterContactFormStory;

export const Default = {
  args: {},
};
