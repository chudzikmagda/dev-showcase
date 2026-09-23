"use client";
import { JSX } from "react";

import {
  ContentWrapper,
  H2Heading,
  ImageWrapper,
  InnerWrapper,
  Paragraph,
  ParagraphsWrapper,
  PortraitSvg,
  SectionWrapper,
  StackWrapper,
} from "./aboutMe.styles";
import TechStack from "./components/TechStack/TechStack";

const AboutMe = (): JSX.Element => {
  return (
    <SectionWrapper id="about">
      <InnerWrapper>
        <ContentWrapper>
          <H2Heading>About me</H2Heading>
          <ParagraphsWrapper>
            <Paragraph>
              I’m a Software Engineer & UI/UX Designer specializing in building
              scalable, high-performance web applications - from micro-frontends
              (Angular, React, Next.js) to robust backend services (NestJS,
              Node.js).
            </Paragraph>
            <Paragraph>
              I combine solid engineering foundations, modern AI-assisted
              workflows, and deep UI/UX intuition to deliver accessible,
              responsive, and visually polished digital products.
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
              href="/images/magdachudzik.webp"
              clipPath="url(#blob)"
            />
          </PortraitSvg>
        </ImageWrapper>
        <StackWrapper>
          <TechStack />
        </StackWrapper>
      </InnerWrapper>
    </SectionWrapper>
  );
};

export default AboutMe;
