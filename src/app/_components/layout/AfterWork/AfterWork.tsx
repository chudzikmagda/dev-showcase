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
          Creativity doesn’t stop at the end of the workday. Here is how I
          explore design, visual art, and tech in my personal time.
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
