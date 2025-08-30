import HomepageHero from "./HomepageHero";

const HomepageHeroStory = {
  component: HomepageHero,
  title: "Heroes/HomepageHero",
  tags: ["autodocs"],
  decorators: (Story: React.FC) => <Story />,
};

export default HomepageHeroStory;

export const Default = {
  args: {
    media: {
      src: "/placeholder-media/footer_video.mp4",
      poster: "",
    },
    title: "Find your place here...",
    subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    highlightTitle: [[0, 0]],
    primaryButton: {
      label: "Learn More",
      id: "#overview",
    },
    secondaryButton: {
      label: "Plan Your Visit",
      link: "#",
    },
    facts: [
      { label: "1985", subLabel: "Founded" },
      { label: "250+", subLabel: "Sermons" },
      { label: "24/7", subLabel: "Prayer Support" },
    ],
  },
};
