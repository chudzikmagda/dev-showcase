import { FeatureCardProps } from "@/app/_components/ui/FeatureCard/featureCard.types";

export const afterWorkData: FeatureCardProps[] = [
  {
    iconURL: "/images/after-work/code.svg",
    category: "Development",
    title: "I gain new skills",
    description:
      "The world moves forward and I try to go with it. I’m a self-taught and I want to develop my current skills and gain new ones in the future. Each day, I try to find at least a moment for writing a code.",
  },
  {
    iconURL: "/images/after-work/photos.svg",
    category: "Photography",
    title: "I take pictures",
    description:
      "I like to re-define my surroundings, frequently showing simple elements in an unusual way. In my pieces, I work with light and clear forms, vesting my photos with a dose of nostalgia. My vision of the world has been recognized in many photography contests.",
    link: {
      label: "Check my pictures",
      url: "https://magdachudzik.pl",
    },
  },
  {
    iconURL: "/images/after-work/graphic-design.svg",
    category: "Design",
    title: "I design graphics",
    description:
      "I’m a fan of minimalism, geometry and clean design. I comprehensively design materials for the Internet and for printing. My experience, gained while working for various brands and trades, makes me ready for each and every challenge.",
  },
];
