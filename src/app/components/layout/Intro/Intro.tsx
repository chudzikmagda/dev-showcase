"use client";
import styled from "styled-components";
import HeroImage from "../../ui/HeroImage/HeroImage";
import Button from "../../ui/Button/Button";
import { ButtonType } from "../../ui/Button/models/button.model";

const SectionWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 40%;
  align-items: center;
  justify-content: center;
  column-gap: calc(var(--basic-spacer) * 8);
  height: 100vh;
  padding: var(--navbar-height);
  background:
    url("/images/bg-section-welcome.svg") center top,
    #151a2d;
  background-size: cover;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: calc(var(--basic-spacer) * 2);
    padding: var(--navbar-height) var(--basic-spacer) var(--basic-spacer)
      var(--basic-spacer);
    height: auto;
  }

  > div {
    padding: var(--basic-spacer);
  }
`;

const H1Heading = styled.h1`
  margin-bottom: 1rem;
  font-size: clamp(1.25rem, 1.5rem + 2vw, calc(3rem + 2vmin));
  font-weight: 600;
  line-height: 1.3;
  color: var(--primary-text-color);
`;

const H3Heading = styled.h3`
  margin-bottom: 1rem;
  font-size: clamp(1rem, 0.9rem + 0.8vw, 1.35rem);
  font-weight: 600;
  color: var(--primary-color);
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Intro = () => {
  const onButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <SectionWrapper>
      <div>
        <H3Heading>Hello</H3Heading>
        <H1Heading>I&apos;m a software engineer and UI designer</H1Heading>
        <Button
          version={ButtonType.PRIMARY}
          hasArrow={true}
          label="Check what I do"
          onClick={onButtonClick}
        />
      </div>
      <HeroImage />
    </SectionWrapper>
  );
};

export default Intro;
