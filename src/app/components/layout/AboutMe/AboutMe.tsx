"use client";
import {
  SectionWrapper,
  InnerWrapper,
  ImageWrapper,
  PortraitSvg,
  ContentWrapper,
  CTAWrapper,
  StackWrapper,
  H2Heading,
  ParagraphsWrapper,
  Paragraph,
} from "./aboutMe.styles";
import Button from "../../ui/Button/Button";
import { ButtonType } from "../../ui/Button/button.types";
import TechStack from "./components/TechStack/TechStack";

const AboutMe = () => {
  const onButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <SectionWrapper id="about">
      <InnerWrapper>
        <ContentWrapper>
          <H2Heading>About me</H2Heading>
          <ParagraphsWrapper>
            <Paragraph>
              I&apos;m a software engineer and UI/UX designer with a strong
              technical background in technical physics.
            </Paragraph>
            <Paragraph>
              I combine solid engineering foundations with design thinking to
              build intuitive, visually polished digital products.
            </Paragraph>
            <Paragraph>
              My focus is responsive, scalable, and accessible user interfaces
              that deliver high performance and meaningful user experiences.
            </Paragraph>
          </ParagraphsWrapper>
        </ContentWrapper>
        <ImageWrapper>
          <PortraitSvg
            viewBox="0 0 369.2 345.5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Magda Chudzik portrait</title>
            <clipPath id="blob" clipPathUnits="userSpaceOnUse">
              <path d="M356.7,264.9c-21,69.7-65.8,94.2-134.5,73.5S93,282.9,40.7,233.9s-54.2-101.2-5.5-156.5s103.8-81,165.5-77s108.3,31.7,140,83S377.7,195.2,356.7,264.9z" />
            </clipPath>
            <image
              width="100%"
              height="100%"
              preserveAspectRatio="xMinYMin slice"
              href="/images/magdachudzik.jpg"
              clipPath="url(#blob)"
            />
          </PortraitSvg>
        </ImageWrapper>
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
      </InnerWrapper>
    </SectionWrapper>
  );
};

export default AboutMe;
