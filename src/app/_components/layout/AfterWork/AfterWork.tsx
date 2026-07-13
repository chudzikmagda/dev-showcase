import { JSX } from "react";

import FeatureCard from "@/app/_components/ui/FeatureCard/FeatureCard";

import { afterWorkData } from "./afterWork.data";
import {
  H2Heading,
  Intro,
  SectionWrapper,
  TextWrapper,
  CardsWrapper,
} from "./afterWork.styles";

const AfterWork = (): JSX.Element => {
  return (
    <SectionWrapper id="after-work">
      <TextWrapper>
        <H2Heading>After work</H2Heading>
        <Intro>
          I like to stay creative and curious outside regular hours. Here is
          what I usually focus on when I am not at my day job.
        </Intro>
      </TextWrapper>
      <CardsWrapper>
        {afterWorkData.map((card) => (
          <FeatureCard key={`${card.category}-${card.title}`} {...card} />
        ))}
      </CardsWrapper>
    </SectionWrapper>
  );
};

export default AfterWork;
