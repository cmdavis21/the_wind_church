import PageHero from "./PageHero";

const PageHeroStory = {
  component: PageHero,
  title: "Heroes/PageHero",
  tags: ["autodocs"],
  decorators: (Story: React.FC) => <Story />,
};

export default PageHeroStory;

export const Default = {
  args: {
    media: {
      src: "/placeholder-media/footer_video.mp4",
    },
    titl: "You belong here.",
    subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    highlightTitle: [[0, 0]],
  },
};
