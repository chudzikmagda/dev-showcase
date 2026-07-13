"use client";
import { JSX } from "react";

import { SectionWrapper, H1Heading, H3Heading } from "./intro.styles";
import Button from "../../../../components/ui/Button/Button";
import { ButtonVersion } from "../../../../components/ui/Button/button.types";
import HeroImage from "../../ui/HeroImage/HeroImage";

const Intro = (): JSX.Element => {
  return (
    <SectionWrapper>
      <div>
        <H3Heading>Hello</H3Heading>
        <H1Heading>I&apos;m a software engineer and UI/UX designer</H1Heading>
        <Button
          version={ButtonVersion.PRIMARY}
          hasArrow={true}
          label="Check what I do"
          href="/projects"
        />
      </div>
      <HeroImage />
    </SectionWrapper>
  );
};

export default Intro;
