import FeatureCard from "@/app/components/ui/FeatureCard/FeatureCard";
import {
  H2Heading,
  Intro,
  SectionWrapper,
  TextWrapper,
  CardsWrapper,
} from "./afterWork.styles";
import { afterWorkData } from "./afterWork.data";

const AfterWork = () => {
  return (
    <SectionWrapper id="afterWork">
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
