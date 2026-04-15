"use client";
import {
  SectionWrapper,
  ContentWrapper,
  CTAWrapper,
  StackWrapper,
  H2Heading,
  Paragraph,
} from "./aboutMe.styles";
import Button from "../../ui/Button/Button";
import { ButtonType } from "../../ui/Button/models/button.model";
import TechStack from "./components/TechStack/TechStack";

const AboutMe = () => {
  const onButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <SectionWrapper>
      <ContentWrapper>
        <H2Heading>About me</H2Heading>
        <Paragraph>
          I’m a software engineer and UI/UX designer, with a strong technical
          background as a technical physicist by education. At work, I
          seamlessly blend technical expertise with artistic vision, crafting
          intuitive and visually compelling digital experiences. I implement
          responsive, scalable, and user-friendly UI, ensuring high performance
          and accessibility. My approach combines modern development practices
          with creative design, delivering impactful solutions.
        </Paragraph>
      </ContentWrapper>
      <StackWrapper>
        <TechStack />
      </StackWrapper>
      <CTAWrapper>
        <Button
          version={ButtonType.PRIMARY}
          hasArrow={true}
          label="Check my projects"
          onClick={onButtonClick}
        />
      </CTAWrapper>
    </SectionWrapper>
  );
};

export default AboutMe;
